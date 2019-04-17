class SavedItemsPage {

  /* Both variables and methods are sorted alphabetically */

  get listEmptyMessageDiv() { return browser.element(".zero-state-header") }
  get savedItemsDeleteListButton() { return browser.elements(".ficon-close") }
  get savedItemsListDiv() { return browser.elements(".grid-card-content") }
  get savedItemsTitleListDiv() { return browser.elements(".card-title a") }

  //Method delete ALL items on Saved Items page
  deleteSavedItems() {
    this.savedItemsDeleteListButton.value.forEach(function (el) {
      el.click()
    })
  }

  validateListIsEmpty() {
    this.listEmptyMessageDiv.waitForVisible()
    return this.listEmptyMessageDiv.getText()
  }

  validateSavedItems() {
    this.savedItemsTitleListDiv.waitForVisible()
    console.log("\nItem saved to list title: " + this.savedItemsTitleListDiv.value[0].getText())
  }
}
export default new SavedItemsPage()
