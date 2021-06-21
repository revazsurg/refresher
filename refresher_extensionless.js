const puppeteer = require('puppeteer');
const fs = require('fs');

const TARGET_URL = process.argv[2];
const INTERVAL = process.argv[3];
const DURATION_DAYS = process.argv[4];
const MILLISECS_IN_DAY = 86400000;
const END_TIME = Date.now() + DURATION_DAYS * MILLISECS_IN_DAY 

async function pageRefresh() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(TARGETURL);

    console.log('script is working');    

    page.on('load', () => console.log(TARGET_URL + ' visited at ' + Date.now() + '\r\n'));    

    if (Date.now() < END_TIME) {
    	setTimeout(pageRefresh(), INTERVAL);
    }
  }
  catch (err) {
    console.log(err);
  }
}

pageRefresh();

