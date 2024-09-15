import{test, expect} from "@playwright/test";
import { Browser, chromium, firefox, Page,BrowserContext } from "@playwright/test";

test("Registerpage", async({page}) => {
    // const Browser = await chromium.launch();
    // const context =await Browser.newContext();
    // const page =await context.newPage();
   await page.goto('https://demo.automationtesting.in/Register.html');
   await page.waitForTimeout(5000)

// // to get the Title of the page
// const pageTitle= await page.title();
// console.log('pageTitle is:', pageTitle);
// await expect(page).toHaveTitle('Register');

// // to get the Url of the page
// const pageUrl= await page.url()
// await expect(page).toHaveURL('https://demo.automationtesting.in/Register.html')
// console.log('pageUrl:', pageUrl)

// await page.getByPlaceholder('First Name').fill("VALLI")
// await page.waitForTimeout(5000)
// await page.getByPlaceholder('Last Name').fill("sidny")
// await page.waitForTimeout(5000)
// //to verify Register text in page
//  const Registerelement = page.locator('//*[@id="section"]/div/h2')
// await expect(Registerelement).toHaveText('Register')

//  await page.waitForTimeout(5000)
// await page.locator('textarea').fill("Address")
// await page.waitForTimeout(5000)

//  await expect(page.getByText('Email address')).toBeVisible()
//  await page.locator("//input[@type='email']").fill('sibyalaammu@gmail.com')
// await page.waitForTimeout(5000)
// await page.locator("//input[@type='tel']").fill('1234567895')
// await page.getByLabel('Male', {exact:true}).check();
 //await page.waitForTimeout(5000)
//await page.getByLabel('Hobbies').isVisible()

//selecting multiple checkboxes using loop 
// const checkboxes = await page.$$("//input[@type='checkbox']")
// for (const checkbox of checkboxes){
// await checkbox.check();
// }

//selecting checkboxes individually

// await page.locator('#checkbox1').check()
// await page.locator('#checkbox2').check()
// await page.locator("//input[@value='Hockey']").check()
// expect(await page.isChecked('input[type="checkbox"]')).toBeTruthy();

//to select element from a hidden dropdown
//await page.locator("//div[@id='msdd']").click()

//need to use debugger option in selector hub
// const options = await page.$$("//li/a[@class='ui-corner-all']")

// for (let option of options){
//     const Language=await option.textContent();
//     //console.log(Language);
//     //await option.click()
//     if(Language && Language.includes('English')){
//         await option.click()
//         break;
//     }
// }
// await page.waitForTimeout(5000)

// const skills =await page.$$("//select[@id='Skills']")

// for(let option of skills){
// const skill =await option.textContent()
// //console.log(skill)
//     if (skill && skill.includes('Art Design')){
//         await option.click()
//         break;
//     }
// }
// await page.waitForTimeout(5000)

// const Allcountries = await page.$$("//span[@role='combobox']")

// for (const counttries of Allcountries){
//     const countrylist = await counttries.textContent()
// console.log(countrylist)
// if (countrylist && countrylist.includes('India')){
//     counttries.click()
//     break;
// }
// }

// // to get the Title of the page
// const pageTitle= await page.title();
// console.log('pageTitle is:', pageTitle);
// await expect(page).toHaveTitle('Register');

// // to get the Url of the page
// const pageUrl= await page.url()
// await expect(page).toHaveURL('https://demo.automationtesting.in/Register.html')
// console.log('pageUrl:', pageUrl)

// await page.getByPlaceholder('First Name').fill("VALLI")
// await page.waitForTimeout(5000)
// await page.getByPlaceholder('Last Name').fill("sidny")
// await page.waitForTimeout(5000)
// //to verify Register text in page
//  const Registerelement = page.locator('//*[@id="section"]/div/h2')
// await expect(Registerelement).toHaveText('Register')

//  await page.waitForTimeout(5000)
// await page.locator('textarea').fill("Address")
// await page.waitForTimeout(5000)

//  await expect(page.getByText('Email address')).toBeVisible()
//  await page.locator("//input[@type='email']").fill('sibyalaammu@gmail.com')
// await page.waitForTimeout(5000)
// await page.locator("//input[@type='tel']").fill('1234567895')
// await page.getByLabel('Male', {exact:true}).check();
 //await page.waitForTimeout(5000)
//await page.getByLabel('Hobbies').isVisible()

//selecting multiple checkboxes using loop 
// const checkboxes = await page.$$("//input[@type='checkbox']")
// for (const checkbox of checkboxes){
// await checkbox.check();
// }

//selecting checkboxes individually

// await page.locator('#checkbox1').check()
// await page.locator('#checkbox2').check()
// await page.locator("//input[@value='Hockey']").check()
// expect(await page.isChecked('input[type="checkbox"]')).toBeTruthy();

//to select element from a hidden dropdown
//await page.locator("//div[@id='msdd']").click()

//need to use debugger option in selector hub
// const options = await page.$$("//li/a[@class='ui-corner-all']")

// for (let option of options){
//     const Language=await option.textContent();
//     //console.log(Language);
//     //await option.click()
//     if(Language && Language.includes('English')){
//         await option.click()
//         break;
//     }
// }
// await page.waitForTimeout(5000)

// const skills =await page.$$("//select[@id='Skills']")

// for(let option of skills){
// const skill =await option.textContent()
// //console.log(skill)
//     if (skill && skill.includes('Art Design')){
//         await option.click()
//         break;
//     }
// }
// await page.waitForTimeout(5000)

// const Allcountries = await page.$$("//span[@role='combobox']")

// for (const counttries of Allcountries){
//     const countrylist = await counttries.textContent()
// console.log(countrylist)
// if (countrylist && countrylist.includes('India')){
//     counttries.click()
//     break;
// }
// }

// await page.locator("//select[@id='yearbox']").selectOption('1960')
// //await page.pause();
// await page.getByPlaceholder('Month').selectOption('May')

// await page.locator("//select[@type='text' and @id='daybox' and @placeholder='Day']").selectOption('12')

//await page.locator("//div/img[@id='imagetrgt']").screenshot({ path: 'baseline.png' })
//await page.screenshot({ path:'fullpage.jpg', fullPage: true});
await page.waitForLoadState("load")
//const fileinput= page.locator("//div/img[@id='imagetrgt']")
const path = require('path');
const uploadFilePath = path.resolve(__dirname, '../screenshots/baseline.png');
await page.setInputFiles("#imagesrc", uploadFilePath);

await page.waitForTimeout(5000)
//await expect(fileinput).toHaveValue('Img1.png');

// path.resolve: This method resolves a sequence of paths or path segments into an absolute path. It processes the paths from right to left, appending each segment to the previous one until an absolute path is formed.
// __dirname: This is a Node.js global variable that represents the directory name of the current module. It provides the absolute path to the directory containing the currently executing file.
});
    
    





    
    
