Feature: testFeature

  @CucumberScenario
  Scenario: testScenario

    Given I'm on google search page
    When I type "macBook" to search field
    And Submit search form
    Then Getting macbook results