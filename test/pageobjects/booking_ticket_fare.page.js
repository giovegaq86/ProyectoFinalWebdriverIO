const Page = require('./page');

class BookingTicketFarePage extends Page {
    get FareTypesSaverButton () { return $("//button[@data-test='fareTypesSaverButton']") }
    get FareStandardButton () { return $("//button[@data-test='fareTypesStandardButton']") }
    get FareTypesFlexiButton () { return $("//button[@data-test='fareTypesFlexiButton']") }
    get FareSaverModalContinueButton () { return $("//button[@data-test='fareTypesSaverModalContinue']") }

    get ContinueWithBasicButton () { return $("//button[@data-test='servicePackagesBasicButton']") }
    get FareStandardButtonButton () { return $("//button[@data-test='servicePackagesPlusButton']") }
    get FareTypesFlexiButton () { return $("//button[@data-test='servicePackagesPremiumButton']") }

    selectFare(){
        this.FareTypesSaverButton.click()
        browser.pause(2000)
        this.FareSaverModalContinueButton.click()
        this.ContinueWithBasicButton.click()
    }

}

module.exports = new BookingTicketFarePage();
