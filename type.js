const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('https://the-internet.herokuapp.com/forgot_password')
  const email = await page.$('#email')
  await email.type('peip7@outlook.com', { delay: 50 })
  await browser.close()
})()
