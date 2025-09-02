describe('Items per page', { tags: '@engagesphere' }, () => {
  beforeEach(() => {
    // Given I access the EngageSphare app having already accepted the cookies banner
    cy.setCookie('cookieConsent', 'accepted')
    cy.visit('https://engage-sphere.vercel.app/')
  })

  // Examples
  const numbers = ['5', '10', '20', '50']

  numbers.forEach((numbers, index) => {
    it(`shows the correct number per page (Example: ${index + 1})`, () => {
      // When I filter by "<number>" items per page
      cy.get('[aria-label="Pagination limit"]').select(numbers)
      // Then I see "<number>" table rows
      cy.get('tbody tr').should('have.length', numbers)
    })
  })
})
