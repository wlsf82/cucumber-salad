import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('I access the EngageSphare app having already accepted the cookies banner', () => {
  cy.setCookie('cookieConsent', 'accepted')
  cy.visit('https://engage-sphere.vercel.app/')
})

Given('I access the Hacker Stories web app', () => {
  cy.visit('https://wlsf82-hacker-stories.web.app/')
})
