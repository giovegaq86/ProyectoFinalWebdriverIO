const LandingPage = require('../pageobjects/landing.page');
const TilePage = require('../pageobjects/tiles.page');
const ResultsPage = require('../pageobjects/results.page');
const Helper = require('../helper/Helper');
const BookingPassengerDetailsPage = require('../pageobjects/booking_passenger_details.page');
const BookingTicketFarePage = require('../pageobjects/booking_ticket_fare.page');
const BookingCustumizeYourTripPage = require('../pageobjects/booking_custumize_your_trip.page');
const BookingOverviewPaymentPage = require('../pageobjects/booking_overview_&_payment.page');

describe('Landing Page design', () => {
    it('should show available flies from TXL to London', () => {
        var fDate = new Date()
        var tDate = new Date()
        fDate.setDate(fDate.getDate() + 1)
        tDate.setDate(tDate.getDate() + 3)
        fDate = Helper.getFormatedDate(fDate)
        tDate = Helper.getFormatedDate(tDate)
        let origin = 'TXL'
        let destiny = 'London'
        let expectedUrl = 'https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/' + fDate + '/' + tDate + '?adults=2&children=3&infants=1'

        LandingPage.open();
        LandingPage.searchFlies(origin, destiny, fDate, tDate)

        // Verify URL
        expect(browser).toHaveUrlContaining(expectedUrl)
        
        // Verify if there available flies
        expect(ResultsPage.cards).toBeElementsArrayOfSize({ gte: 1 })

        // Verify no flies message
        expect(TilePage.NoFliesLabel).not.toExist()
    });

    it('should work correctly the transportation filters', () => {
        browser.url('https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31?transport=')
        browser.deleteCookies()
        // Verify flies
        expect(ResultsPage.resultList).toExist()

        ResultsPage.setAircaftCheckBox(false)
        ResultsPage.setBusCheckBox(true)
        ResultsPage.setTrainCheckBox(false)

        // Verify no flies message
        expect(ResultsPage.NoResultsDiv).toExist()

        ResultsPage.setTrainCheckBox(true)

        // Verify if there are available flies
        expect(ResultsPage.resultList).toExist()

        // Verify if there are available flies
        expect(ResultsPage.cards).toBeElementsArrayOfSize({ gte: 1 })

        // Verify no flies message
        expect(ResultsPage.NoResultsDiv).not.toExist()
    });

    it('should the user info be displayed', () => {
        let email = "gvegaq86@gmail.com"
        let phoneCountry = "cr"
        let phoneNumber = "87089734"
        let name = "Giovanni"
        let lastName = "Vega"
        let nationality = "cr"
        let gender = "mr"
        let passportId= "206220351"
        let birthDate = "07/07/1986"
        let passportIdExpiration = "01/01/2022"
        let expectedUrl = 'https://www.kiwi.com/us/booking?%3FbackToSearchUrl=https%3A%2F%2Fwww.kiwi.com%2Fus%2Fsearch%2Fresults%2Fberlin-tegel-berlin-germany%2Flondon-united-kingdom%2F2020-10-01_2020-10-31%2F2020-10-01_2020-10-31&activeStep=3&currency=usd&direct=true'

        browser.url('https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31')
        ResultsPage.clickOnBookButton()
        BookingPassengerDetailsPage.fillForm(email, phoneCountry, phoneNumber, name, lastName, nationality, gender, passportId, birthDate, passportIdExpiration)
        BookingTicketFarePage.selectFare()
        BookingCustumizeYourTripPage.custumizeYourTrip()

        // Verify Url and displayed user info
        expect(browser).toHaveUrlContaining(expectedUrl)
        expect(BookingOverviewPaymentPage.PassportIdLabel).toHaveText(passportId)
        expect(BookingOverviewPaymentPage.ExpirationDatePassportIdLabel).toHaveText(passportIdExpiration)
        expect(BookingOverviewPaymentPage.PhoneLabel).toHaveTextContaining(phoneNumber)
        expect(BookingOverviewPaymentPage.BirthDateLabel).toHaveTextContaining(birthDate)
        expect(BookingOverviewPaymentPage.FullNameLabel).toHaveTextContaining(name + " " + lastName)
    });
});


