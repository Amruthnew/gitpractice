import {test,expect, chromium} from "@playwright/test";
import {Browser, Page, firefox, webkit} from "@playwright/test";

test("demo", async ()=>{
    const Browser = await chromium.launch();
    const context =await Browser.newContext();
    const page =await context.newPage();
await page.goto("https://demo.automationtesting.in/Register.html");
// await page.getByPlaceholder('First Name').fill("Amrutha");
// await page.getByPlaceholder('Last Name').fill("VALLI");
// await page.locator('textarea').fill("11-5");
// await page.getByLabel('Male').check
// await page.locator("//input[@type='email']").fill("sibyalaammu@gmail.com");
// page.getByRole('checkbox', {name: 'checkbox1' }).check
//await page.locator("//select[@type='text' and @id='Skills']").selectOption("APIs")
await page.getByPlaceholder('Year').selectOption("1993");
await page.waitForTimeout(10000);



});