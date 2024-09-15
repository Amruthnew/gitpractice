import { test, expect } from '@playwright/test'
import { Browser, chromium, firefox, Page } from '@playwright/test'

test('Handlepopups windows', async () => {
    const Browser = await chromium.launch()
    const context = await Browser.newContext()
    const page = await context.newPage()

    await page.goto('https://demo.automationtesting.in/Register.html')
    const switchlink = page.getByRole('link', { name: 'SwitchTo' })
    await switchlink.hover()

    const Alertlink = page.getByRole('link', { name: 'Alerts' })
    await Alertlink.click()
    const newpageAlert = page.getByRole('link', { name: 'Alert with OK', exact: true })
    await newpageAlert.click()
    const link2= page.getByRole('link', {name: 'Alert with OK & Cancel '})
    await link2.click()
    const buttonok =  page.getByRole('button', { name: 'click the button to display a confirm box ', exact: true })
    await buttonok.click()
    const link3= page.getByRole('link', {name: 'Alert with Textbox '})
    await link3.click()
    const promptbox =page.getByRole('button', {name: 'click the button to demonstrate the prompt box', exact: true})
    await promptbox.click()
    page.on('dialog', async dialog => {
        if (dialog.type() === 'alert') {
            expect(dialog.message()).toContain('I am an alert box!')
            await dialog.accept()
        }
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a Button !')
        await dialog.accept();
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name')
        expect(dialog.defaultValue()).toContain('Automation Testing user')
        await dialog.accept('Amrutha');
        await page.waitForTimeout(10000)
    }
)
await page.waitForTimeout(10000)
//Accepting Alert popup window by click on ok

    // page.on('dialog', async dialog => {
    //     console.log(dialog.message())
    //     if (dialog.type() === 'alert') {
    //         await page.pause()
    //         console.log(expect(dialog.message()).toContain('I am an alert box!'))
    //         await dialog.accept()
    //     } else if (dialog.type() === 'confirm') {
    //         console.log(expect(dialog.message()).toContain('Press a Button !'))
    //         await page.waitForTimeout(10000)
    //         await dialog.accept()

    //     } else if (dialog.type() === 'prompt') {
    //         await page.waitForTimeout(10000)
    //         await dialog.accept('prompt')
    //         console.log(expect(dialog.message()).toContain('prompt'))

    //     }

    }) 
