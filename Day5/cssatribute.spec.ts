import {test} from "@playwright/test"


test('learn CSS selectors',async ({page}) => {

await page.goto('https://leaftaps.com/opentaps/control/main')

await page.locator('#username').fill('democsr2')

await page.locator('input[name="PASSWORD"]').fill('crmsfa')

await page.locator('.decorativeSubmit').click()

await page.locator('text=CRM/SFA').click()

//title of homepage
let pageTitle= await page.title()
console.log(pageTitle)//My Home | opentaps CRM

//url of the page
let pageUrl=page.url()
console.log(pageUrl)//https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL584303266516


    
})