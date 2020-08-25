const Page = require('./page');

class BookingCustumizeYourTripPage extends Page {
    get SitOptions1Button () { return $("//div[@data-test='SeatingSelectOptionDesktop-noReservation']") }
    get SitOptions2Button () { return $("//div[@data-test='SeatingSelectOptionDesktop-window']") }
    get SitOptions3Button () { return $("//div[@data-test='SeatingSelectOptionDesktop-aisle']") }
    get SitOptions4Button () { return $("//div[@data-test='SeatingSelectOptionDesktop-extraLegroom']") }
    get ContinueButton () { return $("//button[@data-test='StepControls-AdditionalService-next']") }

    custumizeYourTrip(){
        this.SitOptions1Button.click()
        this.ContinueButton.click()
    }

}

module.exports = new BookingCustumizeYourTripPage();
