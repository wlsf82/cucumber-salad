import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor'

Given('I access the EngageSphare app without any cookies set', () => {
  cy.visit('https://engage-sphere.vercel.app/')
})

Given('I see the cookies consent banner', () => {
  cy.get('[class^="CookieConsent_banner__"]').should('be.visible')
})

When('I click the Accept button', () => {
  cy.contains('button', 'Accept').click()
})

Then('the cookies banner is closed', () => {
  cy.get('[class^="CookieConsent_banner__"]').should('not.exist')
})
