import { defineSupportCode } from 'cucumber'
import myAccountPage from '../pageobjects/myaccount.page'

defineSupportCode(function ({ Then }) {

    Then(/^I validate username is ([^"]*) and log it to console$/, function (username) {
        expect(myAccountPage.validateUsernameSpan()).to.contains(username)
    })
})
