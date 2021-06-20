const puppeteer = require('puppeteer')

(async () => {
	const paths = '/opt/google/chrome/extensions/hgeljhfekpckiiplhkigfehkdpldcggm';
    	try {
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
		await page.type('https://www.google.com/');
		await page.click('button[id="pdcheck"]');
		await page.focus('#pdurl');
		await page.type('https://www.google.com/');
		await page.click('button[id="save"]');
	
		await page.goto('https://www.google.com/');
	}
	catch (err) {
		fs = require('fs');
		fs.writeFile('refresher_error.txt', err);
	}
})();
	