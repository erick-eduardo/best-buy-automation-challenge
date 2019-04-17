import { defineSupportCode } from 'cucumber'
import homePage from '../pageobjects/home.page'

defineSupportCode(function ({ Given, When }) {

  Given(/^I am on the home page$/, function () {
    homePage.open()
  })

  When(/^I click Account Home link$/, function () {
    homePage.clickAccountHomeLink()
  })

  When(/^I click Account menu link$/, function () {
    homePage.clickAccountMenuLink()
  })

  When(/^I click Saved Items menu link$/, function () {
    homePage.clickSavedItemsMenuLink()
  })

  When(/^I click Search button$/, function () {
    homePage.clickSearchButton()
  })

  When(/^I click Sign In button$/, function () {
    homePage.clickSignInButton()
  })

  When(/^I click Sign In button on home$/, function () {
    homePage.clickSignInHomeButton()
  })

  When(/^I fill Email Address input with ([^"]*)$/, function (email) {
    homePage.fillEmailAddressInput(email)
    homePage.emailAddressInput.getValue().should.equal(email)
  })

  When(/^I fill Password input with ([^"]*)$/, function (password) {
    homePage.fillPasswordInput(password)
    homePage.passwordInput.getValue().should.equal(password)
  })

  When(/^I fill Search input with ([^"]*)$/, function (searchItem) {
    homePage.fillSearchInput(searchItem)
    homePage.searchInput.getValue().should.equal(searchItem)
  })
})