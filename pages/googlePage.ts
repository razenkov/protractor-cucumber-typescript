import {$, $$, browser, by, element, ExpectedConditions} from "protractor";

export class googlePage {
    public searchField: any;


    constructor() {
        this.searchField = $("[name=q]");

    }
}