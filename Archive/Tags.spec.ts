import{test } from "@playwright/test";
import { Browser, chromium, firefox, Page,BrowserContext } from "@playwright/test";

test('Tags1@sanity', async({page}) => {
    console.log('sanity test')
})

test('Tags2@smoke', async({page}) => {
    console.log('smoke test')
})

test('Tags3@sanity@reg', async({page}) => {
    console.log('sanity and regrission test')
})
test('Tags4@smoke@reg', async({page}) => {
    console.log('smoke and reg test')
})
