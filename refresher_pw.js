const { chromium } = require('playwright');

(async () => {
  const browser = await chromium .launch();
  const page = await browser.newPage();
  await page.goto('http://www.google.com/');
  await page.screenshot({ path: `google.png` });
  await browser.close();
})();