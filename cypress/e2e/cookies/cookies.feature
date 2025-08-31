Feature: Cookies Consent Banner

  Scenario: consents to the cookie's policies
    Given I access the EngageSphare app without any cookies set
    And I see the cookies consent banner
    When I click the Accept button
    Then the cookies banner is closed
