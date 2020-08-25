const LandingPage = require('../pageobjects/landing.page');
const TilePage = require('../pageobjects/tiles.page');
const ResultsPage = require('../pageobjects/results.page');
const Helper = require('../helper/Helper');

describe('Landing Page design', () => {
    it('should show available flyes from TXL to London', () => {
        var fechaD = new Date()
        var fechaH = new Date()
        fechaD.setDate(fechaD.getDate() + 1)
        fechaH.setDate(fechaH.getDate() + 3)

        fechaD = Helper.getFormatedDate(fechaD)
        fechaH = Helper.getFormatedDate(fechaH)

        LandingPage.open();
        let origin = 'TXL'
        let destino = 'London'
        LandingPage.ingresarDatos(origin, destino, fechaD, fechaH)

        // Validar URL
        expect(browser).toHaveUrlContaining('https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/' + fechaD + '/' + fechaH + '?adults=2&children=3&infants=1')
        
        // Verificar que si se encontraron vuelos
        expect(ResultsPage.resultList).toExist()

        // Verificar el mensaje de no hay vuelos no este presente
        expect(TilePage.labelSinVuelos).not.toExist()
    });

    it('should show available flyes from TXL to London', () => {
        browser.url('https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31')

        // Verificar que si se encontraron vuelos
        expect(ResultsPage.resultList).toExist()

        ResultsPage.setCheckboxAircaft(false)
        ResultsPage.setCheckboxBus(true)
        ResultsPage.setCheckboxTrain(false)

        // Verificar el mensaje de no hay vuelos este presente
        expect(ResultsPage.divNoResults).toExist()

        ResultsPage.setCheckboxTrain(true)

        // Verificar que si se encontraron vuelos
        expect(ResultsPage.resultList).toExist()

        // Verificar que el mensaje de no hay vuelos no este presente
        expect(ResultsPage.divNoResults).not.toExist()
    });

});


