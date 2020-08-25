const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */

class LandingPage extends Page {

    constructor(){
        super()
        this.pageUrl = '/landing/-/-';
    }

    getPageUrl() { return this.pageUrl }

    get OriginInput () { return $("//div[@data-test='PlacePickerInput-origin']/input[@data-test='SearchField-input']") }
    get DestinyInput () { return $("//div[@data-test='PlacePickerInput-destination']/input[@data-test='SearchField-input']") }
    get fromDiv () { return $("(//div[@data-test='SearchField-inputWrapper']/input[@data-test='SearchFieldDateInput'])[1]") }
    get SetDatesButton () { return $("//button[@data-test='SearchFormDoneButton']") }
    get PassangerButton () {return $("//div[@class='PassengersAndBagsFieldstyled__PassengersFieldWrap-sc-1lwaoqz-2 fsEazz']")}
    get AddAdultButton () {return $("(//button[@aria-label='increment'])[1]")}
    get AddChildButton () {return $("(//button[@aria-label='increment'])[2]")}
    get AddBabyButton () {return $("(//button[@aria-label='increment'])[3]")}
    get SearchButton () {return $("//a[@data-test='LandingSearchButton']")}
    get DoneButton () {return $("//button[@data-test='PassengersFieldFooter-done']")}
    fromDate (fDate) { return $("//div[@data-value='" + fDate + "']")}
    toDate (tDdate) { return $("//div[@data-value='" + tDdate + "']")}
    OriginButton (origin) {return $("(//div[@class='PlacePickerstyled__PlacePickerItemName-hrtzfp-6 jVKPfo' and contains(text(), '" + origin + "')])[1]")}
    DestinyButton (destiny) {return $("(//div[@class='PlacePickerstyled__PlacePickerItemName-hrtzfp-6 jVKPfo' and contains(text(), '" + destiny + "')])[1]")}

    searchFlies (origin, destiny, fDate, tDate) {
        // Select origin and destiny
        this.OriginInput.setValue(origin)
        this.OriginButton(origin).click()
        this.DestinyInput.setValue(destiny)
        this.DestinyButton(destiny).click()

        // Select from and to dates
        this.fromDiv.click()
        this.fromDate(fDate).click()
        this.toDate(tDate).click()
        this.SetDatesButton.click()

        // Select passengers
        this.PassangerButton.click()
        this.AddAdultButton.click()
        this.AddChildButton.click()
        this.AddChildButton.click()
        this.AddChildButton.click()
        this.AddBabyButton.click()
        this.DoneButton.click()

        //Search
        this.SearchButton.click()
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open(this.pageUrl);
    }
}

module.exports = new LandingPage();
