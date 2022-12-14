describe('Landing Page Flows', () => {

  beforeEach(() => {
    cy.intercept("POST", "https://equilibrium.herokuapp.com/graphql", {
      fixture: "data1.json"
    })
    cy.visit('http://localhost:3000/');
  });

  it('Should be able to see the title', () => {
    cy.get('[data-cy="title"]')
      .should('be.visible')
      .contains('Equilibrium');
  });

  it('Should be able to see a display of therapists', () => {
    cy.get('[data-cy="landing-page"]')
      .should('be.visible');
  });

  it('Should display optional labels to filter by', () => {
    cy.get('[data-cy="search-tags"]')
      .children()
      .should('be.visible')
      .should('have.length', 7);
    cy.get('[data-cy="label-6"] > label')
      .should('exist')
      .contains('Family Therapy/Marriage Counseling');
    cy.get('[data-cy="label-13"]')
      .should('not.exist');
  });

  it('Should have a container with the therapists', () => {
    cy.get('[data-cy="therapists-card-container"]')
      .children()
      .should('exist')
      .should('have.length', 2);
    cy.get('[href="/2"]')
      .should('exist');
    cy.get('[href="/3"]')
      .should('not.exist');
  });

  it('Should have a therapist\'s information', () => {
    cy.get('[href="/1"]')
      .should('exist');
    cy.get('[href="/1"] > img')
      .should('exist');
    // .contains('https://loremflickr.com/300/300')
    cy.get('[href="/1"] > h2')
      .should('exist');
    // .contains('Sarah Jones')
    cy.get('[href="/1"] > :nth-child(3)')
      .should('exist')
      .contains('ABC therapy');
    cy.get('[href="/1"] > :nth-child(5)')
      .should('exist')
      .contains('60136 Heidenreich Via');
    cy.get('[href="/1"] > :nth-child(6)')
      .should('exist')
      .contains('New Meta, OR 03728-2318');
    cy.get('[href="/1"] > :nth-child(8)')
      .should('exist')
      .contains('766.314.3980');
    cy.get('[href="/1"] > ul > :nth-child(1)')
      .should('exist');
    // .contains('Works with')
    cy.get('[href="/1"] > ul > :nth-child(2)')
      .should('exist')
      .contains('In-house Pharmacy');
    cy.get('[href="/1"] > ul > :nth-child(3)')
      .should('exist')
      .contains('Works with Trauma-based disorders');
    cy.get('[href="/1"] > ul > :nth-child(4)')
      .should('exist')
      .contains('Grief Counseling');
  });

  it('Should have a footer with links to external resources', () => {
    cy.get('[data-cy="resources"]')
      .should('exist');

    cy.get('[data-cy="general-resources"]')
      .should('exist');
    cy.get('[data-cy="general-resources"] > h3')
      .should('exist')
      .contains('General Mental Health Links');
    cy.get('[data-cy="general-resources"] > .webLink')
      .should('exist');

    cy.get('[data-cy="coping-resources"]')
      .should('exist');
    cy.get('[data-cy="coping-resources"] > h3')
      .should('exist')
      .contains('Coping Skills Links');
    cy.get('[href="https://success.oregonstate.edu/sites/success.oregonstate.edu/files/LearningCorner/Tools/stress_management_strategies.pdf"]')
      .should('exist')
      .contains('Stress Management');
    cy.get('[href="https://www.health.harvard.edu/blog/strategies-to-promote-better-sleep-in-these-uncertain-times-2020032719333"]')
      .should('exist')
      .contains('Better Sleep');
    cy.get('[href="https://www.restorecenterla.com/10-coping-skills-for-addiction-recovery/"]')
      .should('exist')
      .contains('Addiction Recovery');
    cy.get('[href="https://www.threeoakshospice.com/blog/bereavement-strategies-coping-with-grief-loss/"]')
      .should('exist')
      .contains('Bereavement Strategies');
    cy.get('[href="https://ccofmooresville.com/101-ways-to-cope-with-anxiety-and-depression/"]')
      .should('exist')
      .contains('Anxiety and Depression');

    cy.get('[data-cy="help-lines-resources"]')
      .should('exist');
    cy.get('[data-cy="help-lines-resources"] > h3')
      .should('exist')
      .contains('Help Line Links');
    cy.get('[data-cy="help-lines-resources"] > .webLink')
      .should('exist');
  });

  it('Should be able to filter by tag', () => {
    cy.get('[data-cy="search-tags"]')
      .children()
      .should('be.visible')
      .should('have.length', 7);
      cy.get('#tag6').click();
    cy.get('[data-cy="therapists-card-container"]')
      .children()
      .should('be.visible')
      .should('have.length', 1);
  });

  it('Should be able to click a therapist\'s card and go to their individual page', () => {
    cy.get('[href="/1"]').click();
    cy.url().should('eq', 'http://localhost:3000/1');
  });
});