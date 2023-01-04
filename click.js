const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('http://google.com')
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button')
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(3) > button')
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button')
  await browser.close()
})()
