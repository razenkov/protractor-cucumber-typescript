import {$, browser, ExpectedConditions} from "protractor";
import {silpoMainPage} from "../pages/silpoMainPage";
import {async, timeout} from "q";

const {Given, When, Then, And} = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;


const mainPage: silpoMainPage = new silpoMainPage();

Given(/^I am on silpo main page$/, async () => {
    await browser.get("https://silpo.ua");
    await expect(browser.getTitle()).to.eventually.equal("«Сільпо»");
});

When(/^I click on chooseStore button$/, async () => {
    await mainPage.chooseMarketButton.click();
});

When(/^I type "(.*?)" in city Input$/, async (text) => {
    await mainPage.chooseCityInput.sendKeys(text);
    await mainPage.cityItem.click();
});

When(/^I type "(.*?)" in address input$/, async (text) => {
    await mainPage.chooseAddressInput.sendKeys(text);
    await mainPage.addressItem.click();
});

When(/^I click on submit button$/, async () => {
    await mainPage.saveButton.click();
});

When(/^I click on "(.*?)" link$/, async (text) => {
    switch (text) {
        case "Акції":

            break;
    }
});

Then (/^I see "(.*?)" header$/, async (text) => {

});

Then(/^I see on the silpo main page "(.*?)"$/, async (text) => {
    let element = $("div.drop-down-title-value>span>span");
    let isPresent = ExpectedConditions.presenceOf(element);
    browser.wait(isPresent, 5000);
    await expect(element.getText()).to.eventually.contains(text);
});