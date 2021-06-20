const puppeteer = require('puppeteer')

const TARGET_URL = process.argv[2];

(async () => {
  try {
    const paths = '/opt/google/chrome/extensions/hgeljhfekpckiiplhkigfehkdpldcggm';
    const browser = await puppeteer.launch({
      headless: false,     	
      args: [
        `--disable-extensions-except=${paths}`,
        `--load-extension=${paths}`
      ]
      });
	
      const page = await.browser.newPage();
      await page.goto('https://autorefresh.io/options/?st=welcome');
      await page.$eval('input[id="default_time"]', el => el.value = '5');
      await page.click('button[id="autostart"]');
      await page.focus('#as2');
      await page.type(targetUrl);
      await page.click('button[id="pdcheck"]');
      await page.focus('#pdurl');
      await page.type(TARGET_URL);
      await page.click('button[id="save"]');

      await page.goto(TARGET_URL);
  }
  catch (err) {
    fs = require('fs');
    fs.writeFile('refresher_error.txt', err);
  }
})();
	