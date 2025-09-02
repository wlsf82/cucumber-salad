describe('Cookies Consent Banner', { tags: '@engagesphere' }, () => {
  beforeEach(() => {
    // Given I access the EngageSphare app without any cookies set
    cy.visit('https://engage-sphere.vercel.app/')
    // And I see the cookies consent banner
    cy.get('[class^="CookieConsent_banner__"]').should('be.visible')
  })

  it("consents to the cookie's policies", () => {
    // When I click the Accept button
    cy.contains('button', 'Accept').click()
    // Then the cookies banner is closed
    cy.get('[class^="CookieConsent_banner__"]').should('not.exist')
    // And the cookieConsent cookie is set with the value accepted
    cy.getCookie('cookieConsent').should('have.property', 'value', 'accepted')
  })

  it("declines to the cookie's policies", () => {
    // When I click the Accept button
    cy.contains('button', 'Decline').click()
    // Then the cookies banner is closed
    cy.get('[class^="CookieConsent_banner__"]').should('not.exist')
    // And the cookieConsent cookie is set with the value accepted
    cy.getCookie('cookieConsent').should('have.property', 'value', 'declined')
  })
})
