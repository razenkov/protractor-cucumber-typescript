import { browser, protractor } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
import {SearchResultPage} from "../pages/searchResultPage";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();
const searchResult: SearchResultPage = new SearchResultPage();

When(/^I type "(.*?)"$/, async (text) => {
    await search.searchTextBox.sendKeys(text);
});

Then(/^I click on search button$/, async () => {
    //await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    await search.searchTextBox.submit();
});

Then(/^I get text from the first link "(.*?)"$/, async (text) => {
    await expect(searchResult.firstLink.getText()).to.eventually.contains(text);
});
