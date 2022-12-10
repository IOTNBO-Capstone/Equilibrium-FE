describe('Landing Page Flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Should be able to see the title', () => {
    cy.get('h1')
      .should('be.visible')
      .contains('Equilibrium')
  });

  it('Should be able to see a display of therapists', () => {
    cy.get('.landing-page-container')
      .should('be.visible')
  });

  it('Should display optional labels to filter by', () => {
    cy.get('.search-tags-container')
    .children()
    .should('be.visible')
    .should('have.length', 13)
    cy.get(':nth-child(13) > label')
      .should('exist')
      .contains('POC')
    cy.get(':nth-child(14) > label')
      .should('not.exist')
  });

  it('Should have a container with the therapists', () => {
    cy.get('.therapist-cards-container')
      .children()
      .should('exist')
      .should('have.length', 10)
    cy.get('[href="/10"]')
      .should('exist')
    cy.get('[href="/11"]')
      .should('not.exist')
  });

  it('Should have therapist information', () => {
    cy.get('[href="/1"]')
      .should('exist')
    cy.get('[href="/1"] > img')
      .should('exist')
      // .contains('https://loremflickr.com/300/300')
    cy.get('[href="/1"] > h2')
      .should('exist')
      .contains('Sarah Jones')
    cy.get('[href="/1"] > :nth-child(3)')
      .should('exist')
      .contains('ABC therapy')
    cy.get('[href="/1"] > :nth-child(5)')
      .should('exist')
      .contains('60136 Heidenreich Via')
    cy.get('[href="/1"] > :nth-child(6)')
      .should('exist')
      .contains('New Meta, OR 03728-2318')
    cy.get('[href="/1"] > :nth-child(8)')
      .should('exist')
      .contains('766.314.3980')
    cy.get('[href="/1"] > :nth-child(10)')
      .should('exist')
      .contains('Works with')
    cy.get('[href="/1"] > :nth-child(11)')
      .should('exist')
      .contains('In-house Pharmacy')
    cy.get('[href="/1"] > :nth-child(12)')
      .should('exist')
      .contains('Works with Trauma-based disorders')
    cy.get('[href="/1"] > :nth-child(13)')
      .should('exist')
      .contains('Grief Counseling')
  });
});