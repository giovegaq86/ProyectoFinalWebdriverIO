const Page = require('./page');

class BookingPassengerDetailsPage extends Page {
    get EmailInput () { return $("//input[@name='email']") }
    get PhoneCountrySelect () { return $("select[name=phoneCountry]") }
    get NationalitySelect () { return $("//select[@data-test='ReservationPassenger-nationality']") }
    get GenderSelect () { return $("//select[@name='title']") }
    get BirthMonthSelect () { return $("//select[@name='birthMonth']") }
    get BirthDayInput () { return $("//input[@name='birthDay']") }
    get BirthYearInput () { return $("//input[@name='birthYear']") }
    get IdExpirationMonthSelect () { return $("//select[@name='idExpirationMonth']") }
    get IdExpirationDayInput () { return $("//input[@name='idExpirationDay']") }
    get IdExpirationYearInput () { return $("//input[@name='idExpirationYear']") }
    get PhoneInput () { return $("//input[@name='phone']") }
    get NameInput () { return $("//input[@name='firstname']") }
    get LastNameInput () { return $("//input[@name='lastname']") }
    get PassportIdInput () { return $("//input[@name='idNumber']") }
    get IdNoExpirationCheck () { return $("//input[@name='idNoExpiration']") }
    get CabinBagOption () { return $("(//div[@data-test='BaggagePickerBRBRedesign-Option-0'])[1]") }
    get NoCheckedBagOption () { return $("(//div[@data-test='BaggagePickerBRBRedesign-Option-0'])[2]") }
    get F15KGCheckedBag1Option () { return $("//div[@data-test='BaggagePickerBRBRedesign-Option-1']") }
    get F1515KGCheckedBag2Option () { return $("//div[@data-test='BaggagePickerBRBRedesign-Option-2']") }
    get AddpassagerButton () { return $("//button[@data-test='ReservationPassengers-addButton']") }
    get NoInsuranceDiv () { return $("//div[@data-test='ReservationPassengerInsurance-content-insurance-type']") }    
    get Insurance1Div () { return $("(//div[@data-test='ReservationPassengerInsurance-content-insurance-type'])[1]") }
    get Insurance2Div () { return $("(//div[@data-test='ReservationPassengerInsurance-content-insurance-type'])[2]") }
    get Insurance3Div () { return $("(//div[@data-test='ReservationPassengerInsurance-content-insurance-type'])[3]") }
    get ContinueButton () { return $("//button[@data-test='StepControls-passengers-next']") }

    fillForm(email, phoneCountry, phoneNumber, name, lastName, nationality, gender, passportId, birthDate, passportIdExpiration){

        let birthDay = birthDate.split("/")[0]
        let birthMonth = birthDate.split("/")[1]
        let birthYear = birthDate.split("/")[2]

        let passportIdExpirationDay = passportIdExpiration.split("/")[0]
        let passportIdExpirationMonth = passportIdExpiration.split("/")[1]
        let passportIdExpirationYear = passportIdExpiration.split("/")[2]

        this.EmailInput.setValue(email)
        this.PhoneCountrySelect.selectByAttribute('value', phoneCountry)
        this.PhoneInput.setValue(phoneNumber)
        this.NameInput.setValue(name)
        this.LastNameInput.setValue(lastName)
        this.NationalitySelect.selectByAttribute('value', nationality)
        this.GenderSelect.selectByAttribute('value', gender)

        this.BirthMonthSelect.selectByAttribute('value', birthMonth)
        this.BirthDayInput.setValue(birthDay)
        this.BirthYearInput.setValue(birthYear)

        this.PassportIdInput.setValue(passportId)

        this.IdExpirationMonthSelect.selectByAttribute('value', passportIdExpirationMonth)
        this.IdExpirationDayInput.setValue(passportIdExpirationDay)
        this.IdExpirationYearInput.setValue(passportIdExpirationYear)

        this.CabinBagOption.click()
        this.Insurance1Div.click()

        this.ContinueButton.click()
    }

}

module.exports = new BookingPassengerDetailsPage();
