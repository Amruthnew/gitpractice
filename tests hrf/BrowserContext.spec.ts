import{test, expect, Browser, Page, Locator,BrowserContext} from '@playwright/test'
import{ chromium, firefox, webkit } from 'playwright'
test('browser context file', async() =>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    //Const page:page =await Browser.newPage();
    const BrowserContext1:BrowserContext = await browser.newContext();
    const page1:Page = await BrowserContext1.newPage();
    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailid1:Locator = await page1.locator('#input-email');
    const password1:Locator = await page1.locator('#input-password');
    const loginButton1:Locator = await page1.locator("[value='Login']");
    await emailid1.fill("pwtest@opencart.com");
    await password1.fill("playwright@123");
    
    await loginButton1.click();


    const Browsercontext_2:BrowserContext= await browser.newContext();
    const page_2:Page = await Browsercontext_2.newPage();
    await page_2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailid2:Locator = await page_2.locator('#input-email');
    const password_2:Locator =await page_2.locator('#input-password');
    const LoginButton2:Locator =await page_2.locator("[value='login']");

    await emailid2.fill("userpw@pw.com");
    await password_2.fill("Test@123");
    await LoginButton2.click();
    
    //await BrowserContext1.close();
    //await Browsercontext_2.close();
    //await Browser.close();

});
