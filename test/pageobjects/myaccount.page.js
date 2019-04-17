class MyAccountPage {

    /* Both variables and methods are sorted alphabetically */

    get usernameSpan() { return browser.element(".welcome-banner__user-name span") }
    get yourProductsDiv() { return browser.element("div[id^='shop-my-devices-quick-view']") }

    validateUsernameSpan() {
        //Added this to wait for full page to load first
        this.yourProductsDiv.waitForVisible()

        this.usernameSpan.waitForVisible()
        console.log("Username is: " + this.usernameSpan.getText())
        return this.usernameSpan.getText()
    }
}
export default new MyAccountPage()




