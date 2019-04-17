class CartPage {

    /* Both variables and methods are sorted alphabetically */

    get cartEmptyMessageH2() { return browser.element(".empty-cart__info-title") }
    get cartItemTitleListDiv() { return browser.elements(".cart-item__details .item-title") }
    get eachPriceListDiv() { return browser.elements(".each-price") }
    get primaryPriceListDiv() { return browser.elements(".priceblock__primary-price") }
    get quantityListSelect() { return browser.elements(".cart-item__quantity-block > select") }
    get removeItemsListLink() { return browser.elements(".cart-item__remove") }
    get savingsPriceListDiv() { return browser.elements(".priceblock__savings-price") }

    changeAmountTo(amount) {
        this.quantityListSelect.waitForVisible()
        this.quantityListSelect.value[0].selectByVisibleText(amount)
    }

    logPriceAndSavings(amount) {
        if (this.primaryPriceListDiv.isExisting()) {
            this.primaryPriceListDiv.waitForVisible()
            console.log("\nPrice is: " + this.primaryPriceListDiv.getText());
        }
        if (this.savingsPriceListDiv.isExisting()) {
            this.savingsPriceListDiv.waitForVisible()
            console.log("\nSavings is: " + this.savingsPriceListDiv.getText());
        }
        if (this.eachPriceListDiv.isExisting()) {
            this.eachPriceListDiv.waitForVisible()
            console.log("\nPrice for each is: " + this.eachPriceListDiv.getText());
        }
    }

    removeOneItemFromCart() {
        this.removeItemsListLink.waitForVisible()
        this.removeItemsListLink.value[0].click()
    }

    validateCartIsEmpty() {
        this.cartEmptyMessageH2.waitForVisible()
        return this.cartEmptyMessageH2.getText()
    }

    validateFirstItemOnCart() {
        this.cartItemTitleListDiv.waitForVisible()
        console.log("\nFirst item on cart: " + this.cartItemTitleListDiv.value[0].getText())
        return this.cartItemTitleListDiv.value[0].getText()
    }
}
export default new CartPage()