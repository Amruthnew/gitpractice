import { test, expect, type Page } from '@playwright/test';
const { chromium, firefox, playwright, moment } = require("playwright");

test('my new test', async () => {
     global.browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
     global.context = await global.browser.newContext();
     await global.context.grantPermissions(['geolocation'], { origin: 'https://www.bajajallianzlife.com/' });
     const page = await global.context.newPage();

     await page.goto('https://www.bajajallianzlife.com/')
     await page.waitForTimeout(15000)
     await page.getByRole('link', { name: 'Plans', exact: true }).click();
     await page.pause();

     await page.getByRole('link', { name: 'General Insurance' }).click();
     await page.pause();
     await page.locator('li:nth-child(5) > .boxicon').click();
     await page.getByRole('combobox').selectOption('1');
     await page.getByRole('textbox', { name: 'Name as per PAN card' }).click();
     await page.getByRole('textbox', { name: 'Name as per PAN card' }).fill('Amrutha Sibyala');
     await page.getByRole('textbox', { name: 'Enter mobile number' }).click();
     await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('9567345623');
     await page.getByRole('link', { name: 'Get Quote' }).click();
     await page.locator('#pincode').click();
     await page.locator('#pincode').fill('517325');
     await page.locator('#famIn').click();
     await page.locator('#famIn').fill('100000');
     //await context.grantPermissions(['geolocation'], { origin: 'https://www.bajajallianz.com/health-insurance-plans/individual-health-insurance-plans/' });
     //await page.goto('https://www.bajajallianz.com/health-insurance-plans/individual-health-insurance-plans/')
     //await page1.locator('#item1').getByRole('paragraph').click();
     //await page.goto('https://www.bajajallianz.com/health-insurance-plans/individual-health-insurance-plans/')
     await page.locator('#item1').getByRole('paragraph').click();
     //await page.locator('#item1').getByText('Self', { exact: true }).click();
     await page.getByLabel('Self').getByLabel
     await page.locator('li').filter({ hasText: /^Self$/ }).locator('label').click();
     await page.pause();
     await page.getByPlaceholder('dd / mm / yyyy').click();
     //const next = page.locator('//div[@id="ui-datepicker-div"]/div/a/span[@class="ui-icon ui-icon-circle-triangle-e"]')
     //const month =page.getByRole('combobox').nth(2)
     // await page.getByPlaceholder('dd / mm / yyyy').click();

     await page.click('//*[@id="ui-datepicker-div"]')

     //const prev = page.locator('//div[@id="ui-datepicker-div"]/div/a/span[@class="ui-icon ui-icon-circle-triangle-w"]')


     const yy = page.locator('.ui-datepicker-year')
     const mm = page.locator('.ui-datepicker-month')
     //const prev = page.locator('//div[@id="ui-datepicker-div"]/div/a/span[@class="ui-icon ui-icon-circle-triangle-w"]')
     const prev = page.getByTitle('Prev', { exact: true })
     const next = page.getByTitle('Next', { exact: true })
     let year = "2000"
     let month = "APR"
     const thismonth = moment(year, month, "MMMM YYYY").isBefore();
     console.log("this month?" + thismonth);
     while (await yy.textContent() != year) {
          If(thismonth); {
               await prev.click()
               break;
          }
     }


// const date = "10"
// const dates = await page.$$("//a[@class='ui-state-default']");
// for (const dt of dates) 
// {
//      if (await dt.textContext == date) {
//           await dt.click();
//           break;
//      }
// }
// const day=page.locator('//*[@id="ui-datepicker-div"]/table/tbody/tr[2]/td[2]');
// await day.click();
// const yy =page.getByRole('combobox').nth(3)
// await yy.click();
// await yy.selectOption("text=1992")

await page.locator('//a[@title="Get my quote"]').click();
await page.pause();

//let date = "20/10/1990"
//await page.fill('[id="selfDob"]',date);
// const datepicker =page.locator('//div/[@class="ui-datepicker-title"]');
// const mm = page.locator("('//div/[@class='ui-datepicker-month']')[4]");
// const yy = page.locator('//div/[@class="ui-datepicker-year"]')
// await page.locator('//*[@id="ui-datepicker-div"]/div/div/select[2]/option[1]').click();
//await page.click("//div/div/input[@class="adultdatepicker, hasDatepicker"]);
//const mmyy = page.locator();
// let date ="10/01/1990"
// await page.fill('[id="selfDob"]', 'date');
// await page.getByRole('link', { name: 'Get my quote', exact: true }).click();




});


function If(thismonth: any) {
     throw new Error('Function not implemented.');
}
// function If(thismonth: any) {
//      throw new Error('Function not implemented.');
// }