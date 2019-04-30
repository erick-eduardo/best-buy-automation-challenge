class SearchPage {

  /* Both variables and methods are sorted alphabetically */

  get addToCartListButton() { return browser.elements(".add-to-cart-button") }
  get filterByPriceDropLabel() { return browser.element("label[for='currentoffers_facet-On-Sale']") }
  get filterByTopRatedLabel() { return browser.element("label[for='customerreviews_facet-Top-Rated']") }
  get goToCartModalLink() { return browser.element(".cart-nav-text") }
  get resultsListLi() { return browser.elements(".sku-item") }
  get saveForLaterListButton() { return browser.elements(".sku-item .save-for-later-save") }
  get sortBySelect() { return browser.element("#sort-by-select") }

  /* Variables for mobile */
  get openSortMenuMobile() { return browser.element(".filter-chicklet") }
  get sortBySelectMobile() { return browser.element("#sort-dropdown") }
  get showResultsButtonMobile() { return browser.element(".show-results-btn") }


  clickAddToCartFirstItem() {
    this.addToCartListButton.waitForVisible()
    this.addToCartListButton.value[0].click()
    this.goToCartModalLink.waitForVisible(5000)
  }

  clickGoToCartModalLink() {
    this.goToCartModalLink.waitForVisible()
    this.goToCartModalLink.click()
  }

  clickSaveOnFirstItem() {
    this.saveForLaterListButton.waitForVisible()
    this.saveForLaterListButton.value[0].click()
  }

  filterBy(filter) {
    switch (filter) {
      case "Price Drop":
        this.filterByPriceDropLabel.click()
        break
      case "Top-Rated":
        this.filterByTopRatedLabel.click()
        break
      default:
    }
  }

  logPriceDropFirstItem() {
    this.resultsListLi.waitForVisible()
    console.log("\nFirst item price drop: " + this.resultsListLi.element(".pricing-price__savings").getText())
  }

  logRatingFirstItem() {
    this.resultsListLi.waitForVisible()
    console.log("\nFirst item rating: " + this.resultsListLi.element("p.sr-only").getText())
  }

  sortResultsBy(sortBy) {
    if (mobile) {
      this.openSortMenuMobile.waitForVisible()
      this.openSortMenuMobile.click()
      this.sortBySelectMobile.selectByVisibleText(sortBy)
      this.showResultsButtonMobile.waitForVisible()
      this.showResultsButtonMobile.click()
      this.resultsListLi.waitForVisible()
    }
    else {
      this.sortBySelect.selectByVisibleText(sortBy)
      this.resultsListLi.waitForVisible()
    }
  }

  validateFirstResult() {
    this.resultsListLi.waitForVisible()
    console.log("\nFirst result title: " + this.resultsListLi.value[0].element(".sku-header").getText())
  }

  validateSearchResults() {
    this.resultsListLi.waitForVisible()
    return this.resultsListLi.value.length
  }
}
export default new SearchPage()