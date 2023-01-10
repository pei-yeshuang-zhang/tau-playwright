const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('https://the-internet.herokuapp.com/key_presses')

  await page.click('input')
  await page.keyboard.type('Pei is not cool')
  await page.keyboard.down('Shift')
  for (let i = 0; i < 'not cool'.length; i++) {
    await page.keyboard.press('ArrowLeft')
  }
  await page.keyboard.up('Shift')
  await page.keyboard.press('Backspace')
  await page.keyboard.type('is cool')

  await browser.close()
})()
