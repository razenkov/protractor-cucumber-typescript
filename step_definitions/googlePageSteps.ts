import {$, $$, browser, by, element, ExpectedConditions} from "protractor";
import {async, timeout} from "q";
import {googlePage} from "../pages/googlePage";


const {Given, When, Then, And} = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const mainPage: googlePage = new googlePage();

Given(/^I'm on google search page$/, async () => {
    await browser.driver.get("https://www.google.com");
});
When(/^I type "([^"]*)" to search field$/, async (text) => {
    await mainPage.searchField.sendKeys(text);
});
When(/^Submit search form$/, async () => {
    await mainPage.searchField.submit();
});
Then(/^Getting macbook results$/, async () => {
    await console.log("----------------------" + browser.getTitle());
    browser.sleep(5000);

    var isContain: boolean = false;

    var elements = await browser.driver.findElements(by.css("[class=\"r\"]"));

    for(var i = 0; i < elements.length; ++i ) {
        var res = await elements[i].getText();
        console.log(await elements[i].getText());
        if (res.includes("macBook")) {
            isContain = true;
        }
    }
    expect(isContain).to.equal(true);
});
