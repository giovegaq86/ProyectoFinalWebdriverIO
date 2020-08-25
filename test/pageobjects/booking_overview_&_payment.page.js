const Page = require('./page');

class BookingOverviewPaymentPage extends Page {
    get EmailLabel () { return $("//div[@class='SummaryPassengersContact__ItemWrapper-sc-1dsvx02-0 fgMgDf'][1]") }
    get PassportIdLabel () { return $("//div[@class='Stack__StyledStack-sc-1t576ow-0 bvQvXg']/span[@class='Tooltip__StyledTooltipChildren-sc-1l15bi-0 iAKRPs'][1]") }
    get ExpirationDatePassportIdLabel () { return $("(//span[@class='Tooltip__StyledTooltipChildren-sc-1l15bi-0 iAKRPs']/p[@class='Text__StyledText-sc-19qtt4y-0 erjWHx'])[2]") }
    get PhoneLabel () { return $("//div[@class='SummaryPassengersContact__ItemWrapper-sc-1dsvx02-0 fgMgDf'][2]") }
    get FullNameLabel () { return $("//span[@class='Text__StyledText-sc-19qtt4y-0 cKZayu']") }
    get BirthDateLabel () { return $("(//span[@class='Tooltip__StyledTooltipChildren-sc-1l15bi-0 iAKRPs']/p[@class='Text__StyledText-sc-19qtt4y-0 erjWHx'])[1]") }
}

module.exports = new BookingOverviewPaymentPage();
