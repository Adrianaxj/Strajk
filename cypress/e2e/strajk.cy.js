describe('booking spec', () => {
  beforeEach('passes', () => {
    cy.visit('http://localhost:5173/')
  });

  it('should display correct info', () => {
    const date = '20203-12-15'
    const time = '12. - 23.00'
    const people = '2'
    const lanes = '37 '

    cy.get('[name="when"]').first().type('2023-05-25');
    cy.get('[name="time"]').first().type('12.00 - 23.00');
    cy.get('[name="people"]').first().type( '2');
    cy.get('[name="lanes"]').first().type( '37');

    cy.get('[name="when"]').first().should('have.value','2023-05-25');
    cy.get('[name="time"]').first().should('have.value', '12.00 - 23.00');
    cy.get('[name="people"]').first().should('have.value', '2');
    cy.get('[name="lanes"]').first().should('have.value', '37');
  });


  it('should be able to add shoes',() => {
    const shoe = '37'
    cy.get('.shoes__button').click();
    cy.get('.shoes__input').type(shoe)
    cy.get('.shoes__input').should("have.value",37);
  })

  it('should be able to remove shoes', () => {
    const shoe = '37'
    cy.get('.shoes__button').click()
    cy.get('.shoes__input').type(shoe)
    cy.get('.shoes__input').should("have.value",37)

    cy.get('.shoes__button--small').click();
    cy.get('.shoes__form').should('not.exist')
  })

  it ('should be able to add a booking and get bookingnumber ', () => {
    const date = '2023-12-15'
    const time = '12.00'
    const people = '1'
    const lanes = 1 
    const shoe = '37'

    cy.get('.booking-info__date').type(date)
    cy.get('[name="time"]').type(time)
    cy.get('.booking-info__who').type(people)
    cy.get('.booking-info__lanes').type(lanes)
    cy.get('.shoes__button').click()
    cy.get('.shoes__input').type(shoe)

    cy.get('.booking__button').click()

    cy.get('.input__label').eq(3).should('have.text', 'Booking number')
  })

  it('should be able to add a booking and show the total sum' , () => {
    const date = '2023-12-15'
    const time = '12.00'
    const people = '1'
    const lanes = 1 
    const shoe = 37

    cy.get('.booking-info__date').type(date)
    cy.get('[name="time"]').type(time)
    cy.get('.booking-info__who').type(people)
    cy.get('.booking-info__lanes').type(lanes)

    cy.get('.shoes__button').click()
    cy.get('.shoes__input').type(shoe)

    cy.get('.booking__button').click()
    cy.get('.confirmation__price').last().should('contain', '220')

  })

  

})