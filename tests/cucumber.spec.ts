import {test, expect, request} from "@playwright/test"

import {chromium, Page} from "@playwright/test"

test('cucumberpage', async({page})=>{
    await page.waitForLoadState('load')
  await page.goto('https://cucumber.io/school/')
  await page.pause()
 // await page.click accept 
 await page.getByRole('button', { name: 'Allow all cookies' }).click();
 const docbutton =await page.getByRole('button', { name:'Docs' } )
 await docbutton.click()
 const abc= await page.locator("//a[@href='/school/']").first()
await abc.click()

//   await page.getByRole('button', { name: 'Docs ' }).click();
//   await page.getByRole('link', { name: '| BDD School' }).click();
//   await page.getByRole('link', { name: 'Login' }).click();
await abc.nth(1).click();

})