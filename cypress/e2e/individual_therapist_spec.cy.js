describe('Individual Therapist Flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/1')
  });

  it.only('Should display the therapist\'s information', () => {
    cy.get('[data-cy="individual-therapist"]')
      .should('exist')
    cy.get('[data-cy="https://loremflickr.com/300/300-1"]')
      .should('exist')
      // .contains('https://loremflickr.com/300/300')
    cy.get('[data-cy="Sarah Jones-1"]')
      .should('exist')
      .contains('Sarah Jones')
    cy.get('[data-cy="here to stay-1"]')
      .should('exist')
      .contains('here to stay')
    cy.get('[data-cy="ABC therapy-1"]')
      .should('exist')
      .contains('ABC therapy')
    cy.get('[data-cy="60136 Heidenreich Via-address-1"]')
      .should('exist')
      .contains('60136 Heidenreich Via')
    cy.get('[data-cy="New Meta, OR 03728-2318-address-1"]')
      .should('exist')
      .contains('New Meta, OR 03728-2318')
    cy.get('.individual-section > :nth-child(8)')
      .should('exist')
      .contains('WWW.ABCD.com')
    cy.get('[data-cy="labels"]')
      .children()
      .should('exist')
      .should('have.length', 4)
    cy.get('[data-cy="label-3"]')
      .should('exist')
    cy.get('[data-cy="label-4"]')
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