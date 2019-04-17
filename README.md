
### Best Buy - Automation Challenge

This repository contains an automation project using the Cucumber (v 3.x) BDD framework. 

It contains Best Buy Challenge end to end testing.

Video Run can be found here:

http://recordit.co/Cao4XPDoTX


### Installation

This project is tested only on ***Node v8.15.1***.  While earlier versions of node may be compatible, they have not been tested or verified.

`JDK 1.8:` Install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` nothing else.

`Node.JS:` Install  from the site - https://nodejs.org/en/  take the LTS version based on your Operating system. Please make sure you install NodeJS globally.

Once installation is done - open terminal (MAC OSX) or command prompt (for windows OS) and type below command to verify NodeJS has been installed properly.

        node --version
        npm --version

Above command should print out the version that you have installed.

Now navigate to the framework's package.json folder and run `npm install` to grab all dependencies.

### Requirements

  To run your test You must have Selenium server up and running to execute any WebdriverIO tests, or it will fail fast with an error. There are two ways you can run selenium.

  Once all the node dependency modules are installed (through `npm install`) then for development, you can run  `npm run selenium-postinstall` followed by `npm run selenium-start` if you wish to start it manually else you can use `services: ['selenium-standalone'],` in .conf.js to start it automatically which has been added as part of this project. That's all there is to it.!. Please note that this step is only one time activity at the initial framework set up. Alternatively you can also use below options to start the selenium server.

  1. Install Selenium (selenium-standalone) through NPM (this is the recommended way to install) as you can use it as a services in your framework without worrying to start the selenium server manually. Please note that you follow this below step if `selenium-standalone` package in not been installed through package manager. If you are behind a specific proxy, then in that case you need to set environment variables:

  - On OSX:
    - NODE_TLS_REJECT_UNAUTHORIZED=0

 - On Windows:
    - setx NODE_TLS_REJECT_UNAUTHORIZED 0

```
  sudo npm install selenium-standalone@latest -g
  sudo selenium-standalone install
  selenium-standalone start
```
  OR

  2. Download the latest selenium standalone server version: and then for example
    $ java -jar selenium-server-standalone-3.4.0.jar. This option is require if you have not done the step No-1. Else ignore it. this is the other way of doing.

  Note: While installing through sudo command - you need to provide System admin password. On windows don't use `sudo`

### How to run the tests

To execute the entire test suite in local development, you can use the below command

`npm run test`

### Reporters

WebdriverIO uses several different types of test reporters to communicate pass/failure.  

##### Allure

To generate and view an allure report locally, run `npm run allure-report`. The Allure report created will be this one:

![](https://i.snag.gy/GcvUsI.jpg =450x)


##### Using Cucumber JavaScript framework

Tests are written in the Cucumber framework using the Gherkin Syntax.

Tests are place in `*.feature` files in the `/test/features/` directory. The feature file running will be this one:
```
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

```