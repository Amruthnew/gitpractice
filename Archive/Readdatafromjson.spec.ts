import {test,expect,Page} from "@playwright/test"
import dataArray from '../testdata/testdata.json'
dataArray.forEach((data) => {
    test(`handlingjsontest ${data.Firstname}`, async({ page })=>{
        await page.goto('https://demoqa.com/automation-practice-form')
        await page.locator("[id='firstName']").fill(data.Firstname)
        await page.getByPlaceholder('Last Name').fill(data.Lastname)
        
    });
});
