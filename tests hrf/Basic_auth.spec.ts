import{test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import{ chromium , firefox, webkit } from 'playwright'
test('basicauth', async() =>{
const browser:Browser= await chromium.launch({headless:false, channel:'chrome'});
const context:BrowserContext = await browser.newContext();
const page:Page = await context.newPage();
//To handle authenticated popup we need to provide https://username:password@url/basic_auth
//await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
//to handle geo location popup we need to add permissions: ['geolocation'] this line in config.ts file
//providing user name and password is not safe to provide in url so we are using btoa -Java autherisation method
//how to check the Authorisation method -console inspect the page and provide input as
//btoa('admin'+':'+'admin'); in postman also we can checkthis method and API response
//Timetravel debugging is nothing but running the commands in ui mode with npx playwright test --ui

//we are providing username and password in another way

const username='admin';
const password='admin';
//const authHeader = 'Basic ' + btoa(username+':'+password);
page.setExtraHTTPHeaders({Autorization : createauthHeader(username, password)});
await page.goto('https://the-internet.herokuapp.com/basic_auth');
await new Promise(() => {}); //prevent your scripts from exiting

});

function createauthHeader(username:any, password:any){
    return 'Basic '+ btoa(username+':'+password);
}