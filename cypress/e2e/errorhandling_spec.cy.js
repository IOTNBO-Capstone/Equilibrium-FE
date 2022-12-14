describe('BadUrl', () => {
  it('Should redirect to home if an invalid url is entered', () => {
    cy.visit('http://localhost:3000/*')
    cy.url().should('eq', 'http://localhost:3000/')

    cy.visit('http://localhost:3000/resource')
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should show the BadUrl component if anything is added after a valid extension in the url', () => {
    cy.visit('http://localhost:3000/2/*')
    cy.get('p')
      .contains('You\'ve reached an invalid URL. Please try again.')

    cy.visit('http://localhost:3000/outbound/*')
    cy.get('p')
      .contains('You\'ve reached an invalid URL. Please try again.')
  })

  it('Should have a button to redirect home if you reach the BadUrl component', () => {
    cy.visit('http://localhost:3000/2/*')
    cy.get('.home-btn')
      .click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

})