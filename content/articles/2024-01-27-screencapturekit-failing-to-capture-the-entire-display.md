---
layout: post
title: ScreenCaptureKit failing to capture the entire Display
author: Federico Terzi
date: 2024-01-27
categories: macos screencapturekit screen recording objective c bug
social_title: ScreenCaptureKit failing to capture the entire Display

---
I’ve just spend a good portion of this afternoon trying to understand why Apple’s ScreenCaptureKit did not behave as expected. My goal was simple: creating the simplest possible program to capture the entire display and analyse the generated buffers.

<!--more-->

Here was a simplified version of my first attempt, in Objective-C:


```javascript
#import <Foundation/Foundation.h>
#import <ScreenCaptureKit/ScreenCaptureKit.h>
#import <CoreGraphics/CoreGraphics.h>
#import <AVFoundation/AVFoundation.h>

@interface StreamOutputDelegate: NSObject <SCStreamOutput>
@end

@implementation StreamOutputDelegate
- (void)stream:(SCStream *)stream didOutputSampleBuffer:(CMSampleBufferRef)sampleBuffer ofType:(SCStreamOutputType)type
{
    NSLog(@"buffer received!");

    // Analysis here
}
@end

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        if (!CGPreflightScreenCaptureAccess()) {
            NSLog(@"CGPreflightScreenCaptureAccess failed");
            return 1;
        }

        CGSize displaySize = CGDisplayBounds(CGMainDisplayID()).size;

        // Get the first display
        __block SCDisplay *display = NULL;
        dispatch_semaphore_t semaphore = dispatch_semaphore_create(0);
        [SCShareableContent getShareableContentWithCompletionHandler:^(SCShareableContent * _Nullable content, NSError * _Nullable error) {
            display = content.displays[0];
            dispatch_semaphore_signal(semaphore);
        }];
        dispatch_semaphore_wait(semaphore, DISPATCH_TIME_FOREVER);

        NSArray *empty = @[];

        // Select display, excluding no window
        SCContentFilter *filter = [[SCContentFilter alloc] initWithDisplay:display excludingWindows:empty];

        SCStreamConfiguration* config = [[SCStreamConfiguration alloc] init];
        config.width = displaySize.width;
        config.height = displaySize.height;
        config.queueDepth = 8;
        config.showsCursor = true;
        config.pixelFormat = kCVPixelFormatType_32BGRA;
        config.colorSpaceName = kCGColorSpaceSRGB;

        StreamOutputDelegate* delegate = [[StreamOutputDelegate alloc] init];

        SCStream * stream = [[SCStream alloc] initWithFilter:filter configuration:config delegate:nil];
        NSError* error = nil;
        BOOL did_add_output = [stream addStreamOutput:delegate
                                                type:SCStreamOutputTypeScreen
                                   sampleHandlerQueue:nil
                                                error:&error];
        if (!did_add_output) {
            NSLog(@"addStreamOutput failed");
            return 1;
        }

        dispatch_semaphore_t semaphore2 = dispatch_semaphore_create(0);
        [stream startCaptureWithCompletionHandler:^(NSError * _Nullable error) {
            NSLog(@"capture started");
            dispatch_semaphore_signal(semaphore2);
        }];
        dispatch_semaphore_wait(semaphore2, DISPATCH_TIME_FOREVER);

        [[NSRunLoop currentRunLoop] run];
    }

    return 0;
}
```


We can compile and run this program from the terminal by running:


```javascript
clang -mmacosx-version-min=12.3 -fobjc-arc -framework Foundation -framework CoreGraphics -framework ScreenCaptureKit -framework AppKit main.m -o main && ./main
```


After providing the necessary permissions on the Settings, we are greeted with this output:


```javascript
2024-01-27 20:19:41.567 main[6246:145858] capture started
```


So the capture started, but where are all our juicy buffers? I expected `buffer received` to be printed many times per second, but it seems like our callback is never called.


I’ve spent many hours trying to debug the issue, until I’ve started experimenting more with the `SCContentFilter`: instead of calling the `initWithDisplay:excludingWindows:` initialization, I’ve tried `initWithDesktopIndependentWindow:`, passing a random window… To my surprise, many `buffer received!` logs started to appear!


For some reason, it seems that passing an empty windows array to `initWithDisplay:excludingWindows:` causes the stream to never start (apparently [I’m not the only one that experienced this problem](https://stackoverflow.com/questions/77513220/how-can-i-use-screencapturekit-to-capture-an-entire-desktop)).


A workaround I’ve came up with is using the `initWithDisplay:includingApplications:exceptingWindows:` initialization method instead, passing all the available applications as input:


```javascript
// ...
// Get all the running applications
__block NSArray<SCRunningApplication *> *apps = nil;
dispatch_semaphore_t semaphore = dispatch_semaphore_create(0);
[SCShareableContent getShareableContentWithCompletionHandler:^(SCShareableContent * _Nullable content, NSError * _Nullable error) {
    display = content.displays[0];
    apps = content.applications;
    dispatch_semaphore_signal(semaphore);
}];
dispatch_semaphore_wait(semaphore, DISPATCH_TIME_FOREVER);

NSArray *empty = @[];

// Select display, including all applications
SCContentFilter *filter = [[SCContentFilter alloc] initWithDisplay:display includingApplications:apps exceptingWindows:empty];
```


Running this program produces:


```javascript
2024-01-27 20:34:04.269 main[6365:151907] buffer received!
2024-01-27 20:34:04.278 main[6365:151896] buffer received!
2024-01-27 20:34:04.287 main[6365:151907] buffer received!
2024-01-27 20:34:04.294 main[6365:151907] buffer received!
2024-01-27 20:34:04.303 main[6365:151896] buffer received!
2024-01-27 20:34:04.311 main[6365:151907] buffer received!
2024-01-27 20:34:04.320 main[6365:151896] buffer received!
2024-01-27 20:34:04.328 main[6365:151896] buffer received!
2024-01-27 20:34:04.336 main[6365:151907] buffer received!
2024-01-27 20:34:04.345 main[6365:151907] buffer received!
2024-01-27 20:34:04.352 main[6365:151896] buffer received!
2024-01-27 20:34:04.361 main[6365:151907] buffer received!
2024-01-27 20:34:04.369 main[6365:151896] buffer received!
2024-01-27 20:34:04.378 main[6365:151907] buffer received!
2024-01-27 20:34:04.386 main[6365:151896] buffer received!
```


Success!

Note: I’m currently running macOS 12.6.3, so newer versions might have already fixed this problem.