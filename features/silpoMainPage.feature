Feature: Simple test on silpo main page

  #@CucumberScenario
  Scenario: Cucumber Silpo Main Page
    Given I am on silpo main page
    When I click on chooseStore button
    When I type "Київ" in city Input
    When I type "вул. Архипенка Олександра, 6" in address input
    When I click on submit button
    Then I see on the silpo main page "Архипенка Олександра"

  #@CucumberScenario
  Scenario: Cucumber Silpo Main Page
    Given I am on silpo main page
    When I click on "Акції" link
    Then I see "Акції" header