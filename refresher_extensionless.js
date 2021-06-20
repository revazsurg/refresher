const puppeteer = require('puppeteer');

const TARGET_URL = process.argv[2];
const INTERVAL = process.argv[3];
const DURATION_DAYS = process.argv[4];
const MILLISECS_IN_DAY = 86400000;
const END_TIME = Date.now() + DURATION_DAYS * MILLISECS_IN_DAY 

async function pageRefresh() {
  try {
    const browser = await puppeteer.launch();
    const page = await.browser.newPage();

    await page.goto(TARGETURL);
    
    if (Date.now() < END_TIME) {
    	setTimeout(pageRefresh(), INTERVAL);
    }
  }
  catch (err) {
    fs = require('fs');
    fs.writeFile('refresher_error.txt', err);
  }
}

pageRefresh();

