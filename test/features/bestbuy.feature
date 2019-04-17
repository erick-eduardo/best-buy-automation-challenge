Feature: End to end testing on BestBuy

    As a user on the BestBuy page I shoud be able to perform basic operations
    So that I can ensure automation project works successfully

    Background:

        Given I am on the home page

    Scenario Outline: Performing a basic login and validating user
        When I click Account menu link
        And I click Sign In button on home
        And I fill Email Address input with <email>
        And I fill Password input with <password>
        And I click Sign In button
        And I click Account menu link
        And I click Account Home link
        Then I validate username is <username> and log it to console

        Examples:
        | email           | password   | username |
        | erick@oktana.io | Oktana2019 | Test     |

    Scenario Outline: Performing a search operation and adding items to Saved Items section
        When I fill Search input with <searchItem>
        And I click Search button
        And I should see a list of search results
        And I sort results by <sortBy>
        And I log the first result to console
        And I click Save link on first item
        And I click Saved Items menu link
        And I validate item is added to saved items and log it to console
        Then I delete added item from Saved Items
        And I validate list is empty

        Examples:
        | searchItem  | sortBy          |
        | Xbox One X  | Customer Rating |

    Scenario Outline: Performing a search operation and adding items to Cart
        When I fill Search input with <searchItem>
        And I click Search button
        And I should see a list of search results
        And I sort results by <sortBy>
        And I click Add to Cart button on first item
        And I click Go to cart link on confirmation modal
        Then I validate item <searchItem> is on cart
        And I remove added item from cart
        And I validate cart is empty

        Examples:
        | searchItem         | sortBy            |
        | PlayStation 4 Pro  | Price High to Low |

    Scenario Outline: Performing a search operation and adding items to Cart, increasing quantity and clearing cart after
        When I fill Search input with <searchItem>
        And I click Search button
        And I should see a list of search results
        And I click Add to Cart button on first item
        And I click Go to cart link on confirmation modal
        Then I validate item <searchItem> is on cart
        When I change quantity amount to <qtAmount>
        And I log price and savings
        And I remove added item from cart
        Then I validate cart is empty

        Examples:
        | searchItem | qtAmount | 
        | Chromecast | 4        |

    Scenario Outline: Performing a search operation and validating filters on side-bar
        When I fill Search input with <searchItem>
        And I click Search button
        And I should see a list of search results
        And I sort results by <sortBy>
        And I select <filterValue> on filters
        Then I should log Price Drop for first item
        And I should log Rating for first item

        Examples:
        | searchItem      | sortBy       | filterValue |
        | Nintendo Switch | Best Selling | Price Drop  |
        | Nintendo Switch | Best Selling | Top-Rated   |