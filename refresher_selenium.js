const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
try {
  let driver = await new Builder().forBrowser('chrome').build();
console.log('1');
    await driver.get('https://www.google.com/');
console.log('2');
    console.log('page visited');    
console.log('3');
    await driver.quit();
console.log('4');
}
catch (err) {
	console.log(err);
}
})();