describe('you wil no be able to book somthing if any inputfield is missing',() => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })

    it('should be show an error message because you chose only date input that you filled in', () => {
        const date = '2023-06-06'
        cy.get('.booking-info__date').type(date)
        cy.get('.booking__button').click()
      
        cy.get('.error-message').should('be.visible')
        cy.get('.error-message__text').should('have.text','Fill out all the fields and make sure that people and shoes is the same number.')
    })

    it('should be show an error message because you chose only time input that you filled in', () => {
        const time = '20.00'
        cy.get('.input__field[name="time"]').type(time)
        cy.get('.booking__button').click()

        cy.get('.error-message').should('be.visible')
        cy.get('.error-message__text').should('have.text','Fill out all the fields and make sure that people and shoes is the same number.')
    })

    it('should be show an error message because you only choes person input that you filled in', () => {
        const person = '2'
        cy.get('.booking-info__who').type(person)
        cy.get('.booking__button').click()

        cy.get('.error-message').should('be.visible')
        cy.get('.error-message__text').should('have.text','Fill out all the fields and make sure that people and shoes is the same number.')
    })

    it('should be show an error message because you chose only date input that you filled in', () => {
        const lanes = '2'
        cy.get('.booking-info__lanes').type(lanes)
        cy.get('.booking__button').click()

        cy.get('.error-message').should('be.visible')
        cy.get('.error-message__text').should('have.text','Fill out all the fields and make sure that people and shoes is the same number.')
    })

    it('should be show an error message because you chose only shoes input that you filled in', () => {
        cy.get('.shoes__button').first().click()
        cy.get('.shoes__input').first().click().type(37)
        cy.get('.booking__button').click()
        
        cy.get('.error-message').should('be.visible')
        cy.get('.error-message__text').should('have.text','Fill out all the fields and make sure that people and shoes is the same number.')
    })
})