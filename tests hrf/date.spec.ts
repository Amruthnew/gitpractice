import {test, expect,Page,} from "@playwright/test"
import {Browser, chromium, firefox} from "@playwright/test"

test("demo", async({page})=>{
    const Browser=await chromium.launch();
    const context= await Browser.newContext();
    const Page=await context.newPage();
    await page.goto("")

})

test("demo1", async({page})=>{
    const Browser=await chromium.launch();
    const context1= await Browser.newContext();
    const page1=await context1.newPage();

})