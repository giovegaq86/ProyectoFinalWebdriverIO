const Page = require('./page');

class TilePage extends Page {
    get labelSinVuelos () { return $("//div[contains(text(), 't find your trip')]") }
}

module.exports = new TilePage();
