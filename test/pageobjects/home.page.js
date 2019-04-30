import Page from './page';

class HomePage extends Page {

  /* MOBILE EXCLUSIVE VARIABLES */
  get headerMenuOpenLink() { return browser.element("#menu2018-button") }
  get signInLinkMobile() { return browser.element("div[aria-hidden='false'] a") }
  get accountHomeLinkMobile() { return browser.element("div[aria-hidden='false'] a[data-lid='hdr_signin']") }
  get searchInputMobile() { return browser.element(".search-input") }
  get searchButtonMobile() { return browser.element(".header-search-button") }
  get savedItemsMenuLinkMobile() { return browser.element("a[data-lid='hdr_saved']") }

  /* Both variables and methods are sorted alphabetically */
  get accountHomeLink() { return browser.element("a[data-lid='ubr_mby_account_home_b']") }
  get accountMenuLink() { return browser.element("#hf_accountMenuLink") }
  get autocompleteContainerDiv() { return browser.element(".autocomplete-container") }
  //Refers to newsletter modal that appears on home
  get closeNewsletterModal() { return browser.element("button[data-track='Close']") }
  get emailAddressInput() { return browser.element("#fld-e") }
  get itemAddedModalDiv() { return browser.element(".c-modal-grid") }
  //Workaround for login, it must wait the page to load
  get loginContentDiv() { return browser.element(".cia-main-content") }
  get mainDiv() { return browser.element('#site-control-content') }
  get passwordInput() { return browser.element("#fld-p1") }
  get savedItemsMenuLink() { return browser.element("#hf_listsMenuLink") }
  get searchButton() { return browser.element(".hf-icon-search") }
  get searchInput() { return browser.element("input[name='st']") }
  get signInButton() { return browser.element(".cia-form__submit-button") }
  get signInHomeButton() { return browser.element(".lam-signIn__button") }
  //Refers to picking USA when opening page
  get usLink() { return browser.element(".us-link") }

  clickAccountHomeLink() {
    if (mobile) {
      this.accountHomeLinkMobile.waitForVisible()
      this.accountHomeLinkMobile.click()
    }
    else {
      this.accountHomeLink.waitForVisible()
      this.accountHomeLink.click()
    }
  }

  clickAccountMenuLink() {
    if (mobile) {
      //this.headerMenuOpenLink.waitForVisible()
      this.headerMenuOpenLink.click()
    }
    else {
      this.accountMenuLink.waitForVisible()
      this.accountMenuLink.click()
    }
  }

  clickSavedItemsMenuLink() {
    if (mobile) {
      //this.headerMenuOpenLink.waitForVisible()
      this.headerMenuOpenLink.click()
      this.savedItemsMenuLinkMobile.waitForVisible()
      this.savedItemsMenuLinkMobile.click()
    }
    else {
      this.savedItemsMenuLink.waitForVisible()
      this.savedItemsMenuLink.click()
    }
  }

  clickSearchButton() {
    if (!this.usLink.isVisible() && !mobile) {
      this.searchButton.waitForVisible()
      this.searchButton.click()
    }
    else {
      this.searchButtonMobile.waitForVisible()
      this.searchButtonMobile.click()
    }
  }

  clickSignInButton() {
    //this.signInButton.waitForVisible()
    this.signInButton.click()
  }

  clickSignInHomeButton() {
    if (mobile) {
      this.signInLinkMobile.waitForVisible()
      this.signInLinkMobile.click()
    }
    else {
      this.signInHomeButton.waitForVisible()
      this.signInHomeButton.click()
      this.loginContentDiv.waitForVisible(5000)
    }
  }

  fillEmailAddressInput(email) {

    this.emailAddressInput.waitForVisible()

    if (!mobile) {
      this.emailAddressInput.clearElement()
    }

    this.emailAddressInput.setValue(email)
  }

  fillPasswordInput(password) {
    this.passwordInput.waitForVisible()
    this.passwordInput.clearElement()
    this.passwordInput.setValue(password)
  }

  fillSearchInput(searchItem) {
    if (mobile) {
      this.searchInput.click()
      this.searchInputMobile.waitForVisible()
      this.searchInputMobile.setValue(searchItem)
    }
    else {
      this.searchInput.waitForVisible()
      this.searchInput.clearElement()
      this.searchInput.setValue(searchItem)
      //This is to wait for the autocomplete div to load avoiding incomplete search
      this.autocompleteContainerDiv.waitForVisible(6000)
    }
  }

  open() {
    super.open('/')
    //This picks USA as default location on first run
    if (this.usLink.isExisting()) {
      this.usLink.waitForVisible()
      this.usLink.click()
    }
    //And this closes newsletter modal on homepage (if not closed yet)
    if (this.closeNewsletterModal.isExisting()) {
      this.closeNewsletterModal.waitForVisible(2000)
      this.closeNewsletterModal.click()
      this.closeNewsletterModal.waitForVisible(2000, true)
    }
    this.mainDiv.waitForVisible()
  }
}

export default new HomePage()
