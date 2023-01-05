const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('https://the-internet.herokuapp.com/dropdown')
  const dropdown = await page.$('#dropdown')
  // select by value
  await dropdown.selectOption({ value: '1' })
  // select by lable
  await dropdown.selectOption({ label: 'Option 2' })
  // select by index
  await dropdown.selectOption({ index: 1 })
  // print values inside the dropdown
  const availableOptions = await dropdown.$$('option')
  for (let i = 0; i < availableOptions.length; i++) {
    console.log(await availableOptions[i].innerText())
  }
  await browser.close()
})()
