describe('Remove Stories', { tags: '@hackerstories' }, () => {
  beforeEach(() => {
    // Given I access the Hacker Stories web app
    cy.visit('https://wlsf82-hacker-stories.web.app/')
    // And I see 20 stories
    cy.get('.item').should('have.length', 20)
  })

  it('shows 19 stories after removing one from the list', () => {
    // When I remove the first one
    cy.get('.button-small')
      .first()
      .click()
    // Then only 19 stories are left
    cy.get('.item').should('have.length', 19)
  })
})
