import {test, expect, Locator} from '@playwright/test'
import { TIMEOUT } from 'dns';
const { webkit, chromium, firefox } =require("playwright");

test('new Insurance', async() => {
  const browser = await chromium.launch( 'channel:firefox', 'headed:false');
  const context = await browser.newContext();
  await context.grantPermissions(['geolocation'], { origin: 'https://www.bajajallianzlife.com/' });
  const page = await context.newPage();
    await page.goto('https://www.policybazaar.com/');

    await page.getByRole('link', { name: 'Cashless Anywhere Health' }).click();
    await page.locator('label').filter({ hasText: 'Self' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Continue ›' }).click();
    await page.waitForTimeout(1000);
    const ageSelection = '//select[@id="Self"]'
    await page.waitForTimeout(1000);
    await page.selectOption(ageSelection,{ value:'20'});
    await page.getByRole('button', { name: 'Continue ›' }).click();
    await page.getByText('Enter City or PIN Code').click();
    await page.getByText('Bengaluru', { exact: true }).click();
    await page.getByText('Your full name').click();
    await page.getByLabel('Your full name').press('CapsLock');
    await page.getByLabel('Your full name').fill('Amry');
    await page.getByText('Enter mobile number').click();
    await page.getByLabel('Enter mobile number').fill('9865344875');
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole('button', { name: 'Continue ›' }).click();
    //await page.waitForLoadState('load');
    //await page.waitForTimeout(50000);
   // browser.context.setDefaultTimeout(60000);
    //await page.waitForSelector('text=Medical history',{timeout:50000});
    await page.waitForLoadState('networkidle');
    //const Title =("//section/div[@class="titleWrapper"]/h1['Medical history']");
    const header:Locator = await page.locator('text=Medical history');
    const headerexist= await header.isEnabled();
    console.log(headerexist);

    await page.waitForLoadState('load');
    await page.waitForTimeout(30000);
  });






