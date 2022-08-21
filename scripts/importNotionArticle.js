const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const path = require("path");
const { writeFile } = require("fs/promises");
const { existsSync, mkdirSync, unlinkSync } = require("fs");
const { stringify } = require("yaml")
const https = require("https");
const fs = require("fs");


const config = require("../notion.config");

const notion = new Client({
  auth: config.notionToken,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

async function main() {
  const pageUrl = argv.pageUrl;
  if (!pageUrl) {
    throw new Error("missing page URL");
  }

  const tokens = pageUrl.split("-");
  const pageId = tokens[tokens.length - 1];
  console.log("importing from page id: ", pageId);

  console.log("loading metadata...");
  const firstBlock = await notion.blocks.retrieve({
    block_id: pageId,
  });
  // console.log(firstBlock)

  const pageTitle = firstBlock["child_page"]["title"];
  const lastEditedTime = Date.parse(firstBlock["last_edited_time"]);

  const y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(lastEditedTime);
  const m = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(lastEditedTime);
  const d = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(lastEditedTime);
  const formattedDate = `${y}-${m}-${d}`;
  const slugTitle = `${formattedDate}-${convertTitleToSlug(pageTitle)}`;
  const fileName = `${slugTitle}.md`;

  console.log(`slug title: '${slugTitle}'`);

  const targetFile = path.resolve(__dirname, "../content/articles", fileName);
  console.log("target file: ", targetFile);

  const frontmatter = {
    layout: "post",
    title: pageTitle,
    author: "Federico Terzi",
    date: formattedDate,
    categories: "TODO",
    social_title: pageTitle,
    social_subtitle: "TODO",
  }

  const yamlFrontmatter = stringify(frontmatter);

  console.log('generating page markdown...');

  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  const finalMarkdown = await resolveImages(mdString, slugTitle);

  const pageString = `---
${yamlFrontmatter}
---
<!--more-->
${finalMarkdown}
`

  console.log("writing markdown file...");
  await writeFile(targetFile, pageString, "utf-8");

  console.log("done!");
}

function convertTitleToSlug(title) {
  const cleanedTitle = title.replace(/[^0-9a-zA-Z ]/g, '');
  const slugTitle = cleanedTitle.toLowerCase().replaceAll(" ", "-");
  return slugTitle;
}

const imageRegex = /!\[(?<caption>[^\]]*)\]\((?<filename>.*?)(?=\"|\))\)/g

async function resolveImages(markdown, slug) {
  const targetImagePath = await createTargetImageDir(slug);

  const allImageTags = markdown.matchAll(imageRegex);

  let current = 0;

  const mappedImages = {};
  for (const imageTag of allImageTags) {
    const url = imageTag.groups["filename"]
    console.log("downloading", url);
    const filename = `image${current++}.png`;
    const targetFilename = path.resolve(targetImagePath, filename);
    if (existsSync(targetFilename)) {
      unlinkSync(targetFilename);
    }
    await download(url, targetFilename);
    mappedImages[url] = `/posts/${slug}/${filename}`;
  }

  return markdown.replaceAll(imageRegex, (_, caption, url) => {
    return `![${caption}](${mappedImages[url]})`
  });
}

async function createTargetImageDir(slug) {
  const imagesPath = path.resolve(__dirname, "../static/posts", slug);
  if (!existsSync(imagesPath)) {
    mkdirSync(imagesPath);
  }
  return imagesPath;
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest, { flags: "wx" });

    const request = https.get(url, response => {
      if (response.statusCode === 200) {
        response.pipe(file);
      } else {
        file.close();
        fs.unlink(dest, () => { }); // Delete temp file
        reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
      }
    });

    request.on("error", err => {
      file.close();
      fs.unlink(dest, () => { }); // Delete temp file
      reject(err.message);
    });

    file.on("finish", () => {
      resolve();
    });

    file.on("error", err => {
      file.close();

      if (err.code === "EEXIST") {
        reject("File already exists");
      } else {
        fs.unlink(dest, () => { }); // Delete temp file
        reject(err.message);
      }
    });
  });
}

main();