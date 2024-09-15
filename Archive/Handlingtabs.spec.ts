//Handling new page or New tab or new window
import{test, expect} from "@playwright/test"
import{Browser, chromium, firefox} from "@playwright/test"

test.skip('Handlingtabs', async({context})=>{
const page = await context.newPage()
await page.goto('https://testpages.eviltester.com/styled/windows-test.html')
const pagepromis = context.waitForEvent("page")
await expect(page).toHaveTitle('Windows Example Test');
await page.locator("id=gobasicajax").click()

const newPage =await pagepromis;

await newPage.locator("[name='submitbutton']").click()

})
//handling new window
test.only('newlink', async({context})=>{
    const page = await context.newPage()
    await page.goto('https://demoqa.com/browser-windows')
    const pagepromis = context.waitForEvent("page")
    await page.locator("[id='windowButton']").click()

    const newpage= await pagepromis
    await expect(newpage).toHaveURL('https://demoqa.com/sample')

    await newpage.close();
     await page.waitForTimeout(10000)

})
