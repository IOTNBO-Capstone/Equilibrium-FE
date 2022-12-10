describe('Individual Therapist Flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/1')
  });

  it('Should display the therapist\'s information', () => {
    cy.get('.individual-section')
      .should('exist')
    cy.get('img')
      .should('exist')
      // .contains('https://loremflickr.com/300/300')
    cy.get('h2')
      .should('exist')
      .contains('Sarah Jones')
    cy.get('.individual-section > :nth-child(3)')
      .should('exist')
      .contains('here to stay')
    cy.get('.individual-section > :nth-child(5)')
      .should('exist')
      .contains('ABC therapy')
    cy.get('.individual-section > :nth-child(6)')
      .should('exist')
      .contains('60136 Heidenreich Via')
    cy.get('.individual-section > :nth-child(7)')
      .should('exist')
      .contains('New Meta, OR 03728-2318')
    cy.get('.individual-section > :nth-child(8)')
      .should('exist')
      .contains('WWW.ABCD.com')
    cy.get('.labels-container')
      .children()
      .should('exist')
      .should('have.length', 4)
    cy.get('.labels-container > :nth-child(4)')
      .should('exist')
    cy.get('.labels-container > :nth-child(5)')
      .should('not.exist')
    cy.get('button')
      .should('exist')
      .contains('Return to Main Page')
  });

  it('Should be able to visit the therapist\'s practice site', () => {
    cy.get('.individual-section > :nth-child(8)').click()
    cy.url().should('eq', 'http://localhost:3000/outbound')
  })

  it('Should be able to return to the landing page on button click', () => {
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
});