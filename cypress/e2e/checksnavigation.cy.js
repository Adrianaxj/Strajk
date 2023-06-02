describe('check the navigation alternative between Booking and Confirmation',() => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })
    it('it should be able to open a navigation menu',() => {
        cy.get('.navigation__icon').click()
        cy.get('.show-menu').should('be.visible')
    })
    it('it should be able to navigate to confirmation page',() => {
        cy.get('.navigation__icon').click()
        cy.get('.navigation__link').last().click()

        cy.url().should('eq', 'http://localhost:5173/confirmation#')

        cy.get('.navigation__icon').click()
        cy.get('.navigation__link').first().click()

        cy.url().should('eq', 'http://localhost:5173/#')
    })
})