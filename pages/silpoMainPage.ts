import {$, $$, by, element, ExpectedConditions} from "protractor";

export class silpoMainPage {
    public chooseMarketButton: any;
    public chooseCityInput: any;
    public cityItem: any;
    public chooseAddressInput: any;
    public addressItem: any;
    public saveButton: any;
    public dropDownTitleValue: any;
    public menuLinks: any;


    constructor() {
        this.chooseMarketButton = $("button.nearest-store__btn");
        this.chooseCityInput = $("input[placeholder='Місто']");
        this.chooseAddressInput = $("input[placeholder='Адреса супермаркету']");
        this.saveButton = $("button.subscribe-form__submit");
        this.dropDownTitleValue = $("div.drop-down-title-value>span>span");
        this.addressItem = $("div.aoutcomplete-menu");
        this.cityItem = $("div.aoutcomplete-menu");
        this.menuLinks = $$("a.menu__nav-link");
    }

}
