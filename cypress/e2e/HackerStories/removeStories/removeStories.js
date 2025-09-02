import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I see 20 stories', () => {
  cy.get('.item').should('have.length', 20)
})

When('I remove the first one', () => {
  cy.get('.button-small')
    .first()
    .click()
})

Then('only 19 stories are left', () => {
  cy.get('.item').should('have.length', 19)
})
