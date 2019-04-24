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