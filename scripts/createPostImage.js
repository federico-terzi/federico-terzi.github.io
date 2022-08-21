const { readdirSync, readFileSync } = require('fs')
const { chromium } = require('playwright')
const yamlFront = require('yaml-front-matter')
const path = require('path')

const ROOT_PATH = process.cwd()
const SOCIAL_PATH = `${ROOT_PATH}/static/social`
const POSTS_PATH = `${ROOT_PATH}/content/articles`

/*
 * Opens an HTML template, sets the title, takes a screenshot and saves it locally as png
 * @param {Page} page
 * @param {string} title
 * @param {string} slug
 */
const generateImage = async (page, title, subtitle, slug) => {
  const URL = `file:///${path.join(__dirname, '/template.html')}`
  const SCREENSHOT_PATH = `${SOCIAL_PATH}/${slug}.png`
  await page.goto(URL, { waitUntil: 'networkidle0', })
  // strange syntax, check https://playwright.dev/docs/api/class-page#page-eval-on-selector for more infos
  await page.$eval('.title', (el, title) => (el.textContent = title), title)
  await page.$eval(
    '.subtitle',
    (el, subtitle) => (el.textContent = subtitle),
    subtitle
  )
  const cardHandle = await page.$('.card')
  await cardHandle.screenshot({
    type: 'png',
    path: SCREENSHOT_PATH,
  })
}

/*
 * Returns if there is an image for the given slug
 * @param {string} slug
 * @returns {boolean}
 */
const doesImageAlreadyExist = (slug) => {
  const files = readdirSync(SOCIAL_PATH)
  return files.find((file) => file.startsWith(slug))
}

/*
 * Posts and lists contain a title followed by a description in YAML
 * @nuxt/content isn't accessible so this has to be parsed manually
 * Returns the extracted title
 * @param {string} str
 * @returns {string}
 */
const getTitleAndDescription = (fileContents) => {
  const content = yamlFront.loadFront(fileContents)

  return [content.social_title ?? content.title, content.social_subtitle]
}

/*
 * Returns meta data to a given file
 * @params {string} name
 * @params {string} basePath
 * @returns {{name|string,path|string,slug|string}} // not sure how to do this object syntax without defining a type
 */
const fileToMeta = (name, basePath) => {
  return {
    name,
    path: `${basePath}/${name}`,
    slug: name.split('.')[0],
  }
}

/*
 * Instantiate a new browser with playwright, get all potential files (lists, posts)
 * and check if there is already a social media preview image in SOCIAL_PATH
 * if not execute generateImage(), nothing will be returned
 */
const generateSocialMediaPreview = async () => {
  console.log('>> GENERATE SOCIAL MEDIA PREVIEWS <<')
  console.log('🆕 newly generated, 🛑 already exists')
  console.log('-------------------------------------')
  const browser = await chromium.launch()
  const page = await browser.newPage()
  const posts = readdirSync(POSTS_PATH).map((name) =>
    fileToMeta(name, POSTS_PATH)
  )
  const files = [...posts]
  for (const file of files) {
    const content = readFileSync(file.path, 'utf8')
    const [title, subtitle] = getTitleAndDescription(content)
    if (!doesImageAlreadyExist(file.slug)) {
      console.log('🆕', title)
      await generateImage(page, title, subtitle, file.slug)
    } else {
      console.log('🛑', title)
    }
  }
  await browser.close()
}

  /*
   * Entry point for generateSocialMediaPreview() when this file is executed
   */
  ; (async () => {
    try {
      await generateSocialMediaPreview()
    } catch (error) {
      console.log('Error:', error)
    }
  })()
