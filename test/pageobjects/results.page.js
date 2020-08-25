const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */

class ResultsPage extends Page {
    get resultList () { return $(".transition-results") }
    get checkBoxAircraft () { return $("//div[@data-test='TransportOptionChoiceGroup']//input[@data-test='TransportOptionCheckbox-aircraft']") }
    get checkBoxBus () { return $("//div[@data-test='TransportOptionChoiceGroup']//input[@data-test='TransportOptionCheckbox-bus']") }
    get checkBoxTrain () { return $("//div[@data-test='TransportOptionChoiceGroup']//input[@data-test='TransportOptionCheckbox-train']") }
    get label1 () {return $("//div[@data-test='TransportOptionChoiceGroup']//input[@data-test='TransportOptionCheckbox-aircraft']/parent::label[1]")}
    get label2 () {return $("//div[@data-test='TransportOptionChoiceGroup']//input[@data-test='TransportOptionCheckbox-bus']/parent::label[1]")}
    get label3 () {return $("//div[@data-test='TransportOptionChoiceGroup']//input[@data-test='TransportOptionCheckbox-train']/parent::label[1]")}
    get divNoResults () {return $("//div[contains(text(), 't find any results')]")}

    setCheckboxAircaft(checked){
        let _currentStatus = this.checkBoxAircraft.getProperty('checked')
        if (_currentStatus != checked){
            this.label1.click()
        }
    }

    setCheckboxBus(checked){
        let _currentStatus = this.checkBoxBus.getProperty('checked')
        if (_currentStatus != checked){
            this.label2.click()
        }
    }

    setCheckboxTrain(checked){
        let _currentStatus = this.checkBoxTrain.getProperty('checked')
        if (_currentStatus != checked){
            this.label3.click()
        }
    }
}


module.exports = new ResultsPage();
