Feature: Greeting

  Background: access EngageSphere with the cookies consent banner already accepted
    Given I access the EngageSphare app having already accepted the cookies banner

  Scenario: shows the default greeting
    Then I see the following greeting: Hi there!

  @smoke
  Scenario: shows a customized greeting
    When I type "<name>" in the name input field
    Then I see the following greeting: Hi "<name>"!

    Examples:
      | name     |
      | Walmyr   |
      | Squirrel |
