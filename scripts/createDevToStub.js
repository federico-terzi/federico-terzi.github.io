const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const path = require("path");
const { readFile } = require("fs/promises");
const { existsSync } = require("fs");
const frontmatter = require("front-matter");
const axios = require("axios");
const FormData = require("form-data")
const os = require("os");

const config = require("../devto.config");

const slugRegex = /\d{4}-\d{2}-\d{1,2}-(.*?)(\.md)?$/g

async function main() {
  const pageId = argv.pageId;
  if (!pageId) {
    throw new Error("missing page id");
  }

  let filePath = path.join(__dirname, "../content/articles", pageId);
  if (!filePath.endsWith(".md")) {
    filePath += ".md"
  }

  if (!existsSync(filePath)) {
    throw new Error(`could not find article on path: ${filePath}`);
  }

  console.log("loading dev.to data...");
  const { token, session } = await getUploadTokens();

  const articleContent = await readFile(filePath, "utf-8");
  const article = frontmatter(articleContent);
  const m = slugRegex.exec(pageId)
  const slug = m[1];
  if (!slug) {
    throw new Error('cannot extract slug');
  }

  console.log("slug:", slug);

  const replacedArticle = `
_I'm Federico, a Software Engineer specialized in Frontend Development and System Programming. You can find out more about my work on [Twitter](https://twitter.com/terzi_federico), [YouTube](https://www.youtube.com/c/FedericoTerzi) and [GitHub](https://github.com/federico-terzi)._

_This post [originally appeared on my personal blog](https://federicoterzi.com/blog/${slug})._ 

${await uploadAndReplaceImages(article.body, token, session)}
`

  console.log(replacedArticle)

  if (os.platform() === "darwin") {
    pbcopy(replacedArticle);
    console.log("copied to clipboard!");
  }
}

const imageRegex = /!\[(?<caption>[^\]]*)\]\((?<filename>.*?)(?=\"|\))\)/g

async function uploadAndReplaceImages(markdown, token, session) {
  const allImageTags = markdown.matchAll(imageRegex);

  const mappedImages = {};
  for (const imageTag of allImageTags) {
    const imageUrl = imageTag.groups["filename"]
    const relativePath = decodeURIComponent(imageUrl)
    const imagePath = path.join(__dirname, "../static", relativePath);
    console.log("uploading", imagePath);
    const uploadedUrl = await upload(imagePath, token, session);
    if (!uploadedUrl) {
      throw new Error("failed upload for imagePath: " + imagePath)
    }
    console.log("uploaded to ", uploadedUrl);
    mappedImages[imageUrl] = uploadedUrl;
  }

  return markdown.replaceAll(imageRegex, (_, caption, relativePath) => {
    return `![${caption}](${mappedImages[relativePath]})`
  });
}

async function upload(imagePath, token, session) {
  const file = await readFile(imagePath);
  const form = new FormData();
  form.append('autenticity_token', token);
  form.append('image', file, 'image.png');

  const response = await axios.post("https://dev.to/image_uploads", form, {
    headers: {
      "accept": "*/*",
      "cookie": `_Devto_Forem_Session=${session};`,
      'x-csrf-token': token,
      "content-length": form.getLengthSync(),
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
      ...form.getHeaders(),
    },
  });

  return response.data.links[0]
}

async function getUploadTokens() {
  const response = await axios.get("https://dev.to/async_info/base_data", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9,it-IT;q=0.8,it;q=0.7,es;q=0.6",
      "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": `remember_user_token=${config.devToCookie}`,
      "Referer": "https://dev.to/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "method": "GET"
  });
  const session = response.headers["set-cookie"].find(c => c.includes("_Devto_Forem_Session")).split("_Devto_Forem_Session=")[1].split(";")[0]
  const user = JSON.parse(response.data.user);
  console.log("logged in as: ", user["name"]);
  return { token: response.data.token, session };
}

function pbcopy(data) {
  var proc = require('child_process').spawn('pbcopy');
  proc.stdin.write(data); proc.stdin.end();
}

main();