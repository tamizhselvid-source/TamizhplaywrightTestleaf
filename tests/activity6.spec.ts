import {test} from "@playwright/test"


test('learn CSS selectors',async ({page}) => {

await page.goto('https://login.salesforce.com/?locale=in')

await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')

await page.locator("//*[@id='Login']").click()

await page.locator('input[name="pw"]').fill('TestLeaf@2025')

await page.locator("//*[@id='Login']").click()

await page.locator("text='Trial Expired'").textContent()

let pageTitle= await page.title()
console.log(pageTitle)
 
 

//url of the page
let pageUrl=page.url()
console.log(pageUrl)

})