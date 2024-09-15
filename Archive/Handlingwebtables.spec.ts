import {test,expect} from '@playwright/test'
import {Browser, firefox, webkit, chromium,Page} from '@playwright/test'

test('webtable', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const elements = await page.locator("//table[@id='productTable']")

    const coloumns = await elements.locator('thead tr th')
    console.log(coloumns)
    coloumns.count()
    const rows =await elements.locator('tbody tr')
    rows.count()
    console.log(rows)

   // const page1 = await page.locator("//ul[@class='pagination']/li/a[1]")
// select checkbox for product 4 

//    const matchedRow = rows.filter({
//              has: page.locator('td'),
//              hasText: 'product 4'
//    })
    
//    await matchedRow.locator('input').check()

   await page.waitForTimeout(5000)

   await selectProduct(rows, page, 'Product1')
   await selectProduct(rows, page, 'Product2')
   await selectProduct(rows, page, 'Product3')
})

async function selectProduct(rows, page, name)
{
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
})
await matchedRow.locator('input').check()
}

