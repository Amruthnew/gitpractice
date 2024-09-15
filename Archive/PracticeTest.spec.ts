import{test, expect} from '@playwright/test'
import{Browser, chromium, firefox, Page} from '@playwright/test'

test('practicesite @sanity', async({page})=>{
await page.goto('https://practice.automationtesting.in/')
const shoplink= page.getByRole('link',{name:'Shop'})
await shoplink.click()
await expect(page).toHaveURL('https://practice.automationtesting.in/shop/')
await page.waitForTimeout(20000)
await page.getByRole('link', {name:'Home'}).click()

await page.waitForSelector('//div[@class="themify_builder_sub_row clearfix gutter-default   sub_row_1-0-2"]')
const elements = page.locator('/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]');
console.log(elements)
// Assert the count of the elements
//expect(elements.count()).toBe(3); 
})