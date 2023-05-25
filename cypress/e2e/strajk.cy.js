const { event } = require("cypress/types/jquery");

describe('booking spec', () => {
  beforeEach('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[name-"when"]').should("be.visible");
    cy.get('[name-"when"]').first().click();
  });

  it('should display correct info', () => {
    cy.get('data').
  })
})