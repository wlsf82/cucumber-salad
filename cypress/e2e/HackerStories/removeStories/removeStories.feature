Feature: Remove Stories

  @hackerstories
  Scenario: shows 19 stories after removing one from the list
    Given I access the Hacker Stories web app
    And I see 20 stories
    When I remove the first one
    Then only 19 stories are left
