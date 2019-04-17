import { defineSupportCode } from 'cucumber'
import searchPage from '../pageobjects/search.page'

defineSupportCode(function ({ When, Then }) {

    When(/^I click Add to Cart button on first item$/, function () {
        searchPage.clickAddToCartFirstItem()
    })

    When(/^I click Go to cart link on confirmation modal$/, function () {
        searchPage.clickGoToCartModalLink()
    })

    When(/^I click Save link on first item$/, function () {
        searchPage.clickSaveOnFirstItem()
    })

    When(/^I log the first result to console$/, function () {
        searchPage.validateFirstResult()
    })

    When(/^I select ([^"]*) on filters$/, function (filter) {
        searchPage.filterBy(filter)
    })

    Then(/^I should log Price Drop for first item$/, function () {
        searchPage.logPriceDropFirstItem()
    })

    Then(/^I should log Rating for first item$/, function () {
        searchPage.logRatingFirstItem()
    })

    When(/^I should see a list of search results$/, function () {
        //Expecting to have at least 5 items after search
        expect(searchPage.validateSearchResults()).to.be.above(5)
    })

    When(/^I sort results by ([^"]*)$/, function (sortBy) {
        searchPage.sortResultsBy(sortBy)
    })
})