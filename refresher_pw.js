const { webkit } = require('playwright');
console.log('prefunction');
(async () => {
  console.log('start');
  const browser = await webkit.launch();
  console.log('browser launched');
  const page = await browser.newPage();
  console.log('page created');
  await page.goto('http://whatsmyuseragent.org/');
  console.log('page visited');
  await page.screenshot({ path: `example.png` });
  console.log('screenshot taken');
  await browser.close();
  console.log('browser closed');
})();