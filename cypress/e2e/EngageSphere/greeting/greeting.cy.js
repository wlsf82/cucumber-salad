describe('Greeting', { tags: '@engagesphere' }, () => {
  beforeEach(() => {
    // Given I access the EngageSphare app having already accepted the cookies banner
    cy.setCookie('cookieConsent', 'accepted')
    cy.visit('https://engage-sphere.vercel.app/')
  })

  it('shows the default greeting', () => {
    // Then I see the following greeting: Hi there!
    cy.contains('h2', 'Hi there!').should('be.visible')
  })

  // Examples
  const namesAndIcons = [
    {
      name: 'Walmyr',
      icon: 'none'
    },
    {
      name: 'Squirrel',
      icon: 'lucide-squirrel'
    },
  ]

  namesAndIcons.forEach(({ name, icon }) => {
    it(`shows a customized greeting: Hi ${name}!`, { tags: '@smoke' }, () => {
      // When I type "<name>" in the name input field
      cy.get('input[data-testid="name"]').type(name)
      // Then I see the following greeting: Hi "<name>"!
      cy.contains('h2', `Hi ${name}!`).should('be.visible')
      // And I see the following icon: "<icon>"
      if (icon !== 'none') {
        cy.get(`.${icon}`).should('be.visible')
      }
    })
  })
})
