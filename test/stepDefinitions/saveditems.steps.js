import { defineSupportCode } from 'cucumber'
import savedItemsPage from '../pageobjects/saveditems.page'

defineSupportCode(function ({ When }) {

    When(/^I delete added item from Saved Items$/, function () {
        savedItemsPage.deleteSavedItems()
    })

    When(/^I validate item is added to saved items and log it to console$/, function () {
        savedItemsPage.validateSavedItems()
    })

    When(/^I validate list is empty$/, function () {
        //Expecting message that list is empty
        expect(savedItemsPage.validateListIsEmpty()).to.contains("Your list is currently empty.")
    })
})