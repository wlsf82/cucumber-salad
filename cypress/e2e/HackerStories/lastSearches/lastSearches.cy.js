describe('Last Searches', { tags: '@hackerstories' }, () => {
  beforeEach(() => {
    // Given I access the Hacker Stories web app
    cy.visit('https://wlsf82-hacker-stories.web.app/')
  })

  it('shows the last three searched terms as buttons', () => {
    const terms = ['Vue', 'Svelte', 'Angular']
    // When I search for these terms: Vue, Svelte, and Angular
    terms.forEach(term => {
      cy.get('#search')
        .clear()
        .type(`${term}{enter}`)
    })
    // Then I see 3 buttons, one for each of the last searched terms
    cy.get('.last-searches button').should('have.length', 3)
  })
})
