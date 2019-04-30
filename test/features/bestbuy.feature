Feature: End to end testing on BestBuy

    As a user on the BestBuy page I shoud be able to perform basic operations
    So that I can ensure automation project works successfully

    Background:

        Given I am on the home page

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