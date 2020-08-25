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

    get inputOrigen () { return $("//div[@data-test='PlacePickerInput-origin']/input[@data-test='SearchField-input']") }
    get inputDestino () { return $("//div[@data-test='PlacePickerInput-destination']/input[@data-test='SearchField-input']") }
    get divDesde () { return $("(//div[@data-test='SearchField-inputWrapper']/input[@data-test='SearchFieldDateInput'])[1]") }
    get buttonSetDates () { return $("//button[@data-test='SearchFormDoneButton']") }
    get buttonPasajeros () {return $("//div[@class='PassengersAndBagsFieldstyled__PassengersFieldWrap-sc-1lwaoqz-2 fsEazz']")}
    get buttonAddAdulto () {return $("(//button[@aria-label='increment'])[1]")}
    get buttonAddNino () {return $("(//button[@aria-label='increment'])[2]")}
    get buttonAddBebe () {return $("(//button[@aria-label='increment'])[3]")}
    get buttonSearch () {return $("//a[@data-test='LandingSearchButton']")}
    get buttonDone () {return $("//button[@data-test='PassengersFieldFooter-done']")}
    fechaDesde (fechaD) { return $("//div[@data-value='" + fechaD + "']")}
    fechaHasta (fechaH) { return $("//div[@data-value='" + fechaH + "']")}
    buttonOrigen (origen) {return $("(//div[@class='PlacePickerstyled__PlacePickerItemName-hrtzfp-6 jVKPfo' and contains(text(), '" + origen + "')])[1]")}
    buttonDestino (destino) {return $("(//div[@class='PlacePickerstyled__PlacePickerItemName-hrtzfp-6 jVKPfo' and contains(text(), '" + destino + "')])[1]")}

    ingresarDatos (origen, destino, fechaD, fechaH) {
        // Seleccionar origen y destino
        this.inputOrigen.setValue(origen)
        this.buttonOrigen(origen).click()
        this.inputDestino.setValue(destino)
        this.buttonDestino(destino).click()

        // Seleccionar fecha desde y fecha hasta
        this.divDesde.click()
        this.fechaDesde(fechaD).click()
        this.fechaHasta(fechaH).click()
        this.buttonSetDates.click()

        // Seleccionar pasajeros
        this.buttonPasajeros.click()
        this.buttonAddAdulto.click()
        this.buttonAddNino.click()
        this.buttonAddNino.click()
        this.buttonAddNino.click()
        this.buttonAddBebe.click()
        this.buttonDone.click()

        //Buscar
        this.buttonSearch.click()
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open(this.pageUrl);
    }
}

module.exports = new LandingPage();
