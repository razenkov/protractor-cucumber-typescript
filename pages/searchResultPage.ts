import {by, element} from "protractor";

export class SearchResultPage {
    public firstLink: any;

    constructor(){
        this.firstLink = element(by.xpath("//*[@id=\"rso\"]/div/div/div[1]/div/div/h3/a"));
    }
}