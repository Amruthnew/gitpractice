import {test, expect } from "@playwright/test";
import {chromium, firefox, webkit,Page} from  'playwright';
test("loginpage2", async({page})=>{

    await page.goto("https://demoblaze.com/");
    await expect(page.locator("#logout2")).toBeVisible();

})