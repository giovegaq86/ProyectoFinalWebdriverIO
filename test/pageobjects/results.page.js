const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */

class ResultsPage extends Page {
    get resultList () { return $(".transition-results") }
    get AircraftCheckBox () { return $("//div[@data-test='TransportOptionChoiceGroup']//input[@data-test='TransportOptionCheckbox-aircraft']") }
    get BusCheckBox () { return $("//div[@data-test='TransportOptionChoiceGroup']//input[@data-test='TransportOptionCheckbox-bus']") }
    get TrainCheckBox () { return $("//div[@data-test='TransportOptionChoiceGroup']//input[@data-test='TransportOptionCheckbox-train']") }
    get transport1Label () {return $("//div[@data-test='TransportOptionChoiceGroup']//input[@data-test='TransportOptionCheckbox-aircraft']/parent::label[1]")}
    get transport2Label () {return $("//div[@data-test='TransportOptionChoiceGroup']//input[@data-test='TransportOptionCheckbox-bus']/parent::label[1]")}
    get transport3Label () {return $("//div[@data-test='TransportOptionChoiceGroup']//input[@data-test='TransportOptionCheckbox-train']/parent::label[1]")}
    get NoResultsDiv () {return $("//div[contains(text(), 't find any results')]")}
    get BookButton () {return $("(//div[@data-test='BookingButton'])[1]")}
    get ShowMeButton () {return $("//button[@class='ButtonPrimitive__StyledButtonPrimitive-q2qrvj-0 hYvXZ']")}
    get cards () {return $$("//div[@data-test='ResultCardWrapper']")}

    setAircaftCheckBox(checked){
        let _currentStatus = this.AircraftCheckBox.getProperty('checked')
        if (_currentStatus != checked){
            this.transport1Label.click()
        }
    }

    setBusCheckBox(checked){
        let _currentStatus = this.BusCheckBox.getProperty('checked')
        if (_currentStatus != checked){
            this.transport2Label.click()
        }
    }

    setTrainCheckBox(checked){
        let _currentStatus = this.TrainCheckBox.getProperty('checked')
        if (_currentStatus != checked){
            this.transport3Label.click()
        }
    }

    clickOnBookButton(){
        if(this.ShowMeButton.isExisting({ timeout: 1000 })){
            this.ShowMeButton.click()
        }
        this.BookButton.click()
    }
}


module.exports = new ResultsPage();
