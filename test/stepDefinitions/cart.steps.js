import { defineSupportCode } from 'cucumber'
import cartPage from '../pageobjects/cart.page'

defineSupportCode(function ({ When }) {

    When(/^I change quantity amount to ([^"]*)$/, function (amount) {
        cartPage.changeAmountTo(amount)
    })

    When(/^I log price and savings$/, function () {
        cartPage.logPriceAndSavings()
    })

    When(/^I remove added item from cart$/, function () {
        cartPage.removeOneItemFromCart()
    })

    When(/^I validate cart is empty$/, function () {
        expect(cartPage.validateCartIsEmpty()).to.include("cart is empty")
    })

    When(/^I validate item ([^"]*) is on cart$/, function (searchItem) {
        expect(cartPage.validateFirstItemOnCart()).to.include(searchItem)
    })
})