console.log('start script');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/');
  await page.screenshot({ path: `google.png` });
  console.log('screenshot captured');
  await browser.close();
})();