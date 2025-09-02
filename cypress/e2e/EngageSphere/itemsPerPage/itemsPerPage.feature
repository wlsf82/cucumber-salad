Feature: Items per page

  Background: access EngageSphere with the cookies consent banner already accepted
    Given I access the EngageSphare app having already accepted the cookies banner

  @engagesphere
  Scenario: shows the correct number per page
    When I filter by "<number>" items per page
    Then I see "<number>" table rows

    Examples:
      | number |
      | 5      |
      | 10     |
      | 20     |
      | 50     |
