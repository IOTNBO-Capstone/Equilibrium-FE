describe('Landing Page Flows', () => {

  beforeEach(() => {
    cy.intercept("POST", "https://equilibrium.herokuapp.com/graphql", {
      fixture: "data1.json"
    });
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

describe('Individual Therapist Flows', () => {

  beforeEach(() => {
    cy.intercept("POST", "https://equilibrium.herokuapp.com/graphql", {
      fixture: "data1.json"
    });
    cy.visit('http://localhost:3000/1');
  });

  it('Should display the therapist\'s information', () => {
    cy.get('[data-cy="individual-therapist"]')
      .should('exist');
    cy.get('[data-cy="https://loremflickr.com/300/300-1"]')
      .should('exist');
    // .contains('https://loremflickr.com/300/300')
    cy.get('[data-cy="Sarah Jones-1"]')
      .should('exist')
      .contains('Sarah Jones');
    cy.get('[data-cy="here to stay-1"]')
      .should('exist')
      .contains('here to stay');
    cy.get('[data-cy="ABC therapy-1"]')
      .should('exist')
      .contains('ABC therapy');
    cy.get('[data-cy="60136 Heidenreich Via-address-1"]')
      .should('exist')
      .contains('60136 Heidenreich Via');
    cy.get('[data-cy="New Meta, OR 03728-2318-address-1"]')
      .should('exist')
      .contains('New Meta, OR 03728-2318');
    cy.get('.individual-section > :nth-child(8)')
      .should('exist')
      .contains('WWW.ABCD.com');
    cy.get('[data-cy="labels"]')
      .children()
      .should('exist')
      .should('have.length', 4);
    cy.get('[data-cy="label-3"]')
      .should('exist');
    cy.get('[data-cy="label-4"]')
      .should('not.exist');
    cy.get('button')
      .should('exist')
      .contains('Return to Main Page');
  });

  it('Should be able to visit the therapist\'s practice site', () => {
    cy.get('.individual-section > :nth-child(8)').click();
    cy.url().should('eq', 'http://localhost:3000/outbound');
  });

  it('Should be able to return to the landing page on button click', () => {
    cy.get('button').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
describe('BadUrl', () => {
  beforeEach(() => {
    cy.intercept("POST", "https://equilibrium.herokuapp.com/graphql", {
      fixture: "data1.json"
    });
    cy.visit('http://localhost:3000/outbound');
  });

  it('Should redirect to home if an invalid url is entered', () => {
    cy.visit('http://localhost:3000/*');
    cy.url().should('eq', 'http://localhost:3000/');

    cy.visit('http://localhost:3000/resource');
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('Should show the BadUrl component if anything is added after a valid extension in the url', () => {
    cy.visit('http://localhost:3000/2/*');
    cy.get('p')
      .contains('You\'ve reached an invalid URL. Please try again.');

    cy.visit('http://localhost:3000/outbound/*');
    cy.get('p')
      .contains('You\'ve reached an invalid URL. Please try again.');
  });

  it('Should have a button to redirect home if you reach the BadUrl component', () => {
    cy.visit('http://localhost:3000/2/*');
    cy.get('.home-btn')
      .click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

});

describe('Outbound Page', () => {
  beforeEach(() => {
    cy.intercept("POST", "https://equilibrium.herokuapp.com/graphql", {
      fixture: "data1.json"
    });
    cy.visit('http://localhost:3000/outbound');
  });

  it('Should have a list of project contributers', () => {
    cy.get('[data-cy="outbound-container"]')
      .should('exist');
  });

  it('Should have a thank you message', () => {
    cy.get('[data-cy="thanks"]')
      .should('exist')
      .contains('Thank you for viewing our application.');
  });

  it('Should have links to all of the creators\' Github and LinkedIn profiles', () => {
    cy.get('[data-cy="ali"]')
      .should('exist')
      .get('[data-cy="ali"] > h4')
      .should('exist')
      .contains('Ali Nix')
      .get('[data-cy="ali"] > .github')
      .should('exist')
      .get('[data-cy="ali"] > .github > .github-icon')
      .should('exist')
      .get('[data-cy="ali"] > .github > .webLink')
      .should('exist')
      .get('[data-cy="ali"] > .linkedin')
      .should('exist')
      .get('[data-cy="ali"] > .linkedin > .linkedin-icon')
      .should('exist')
      .get('[data-cy="ali"] > .linkedin > .webLink')
      .should('exist');

    cy.get('[data-cy="candace"]')
      .should('exist')
      .get('[data-cy="candace"] > h4')
      .should('exist')
      .contains('Candace Eckels')
      .get('[data-cy="candace"] > .github')
      .should('exist')
      .get('[data-cy="candace"] > .github > .github-icon')
      .should('exist')
      .get('[data-cy="candace"] > .github > .webLink')
      .should('exist')
      .get('[data-cy="candace"] > .linkedin')
      .should('exist')
      .get('[data-cy="candace"] > .linkedin > .linkedin-icon')
      .should('exist')
      .get('[data-cy="candace"] > .linkedin > .webLink')
      .should('exist');

    cy.get('[data-cy="dana"]')
      .should('exist')
      .get('[data-cy="dana"] > h4')
      .should('exist')
      .contains('Dana Chapman')
      .get('[data-cy="dana"] > .github')
      .should('exist')
      .get('[data-cy="dana"] > .github > .github-icon')
      .should('exist')
      .get('[data-cy="dana"] > .github > .webLink')
      .should('exist')
      .get('[data-cy="dana"] > .linkedin')
      .should('exist')
      .get('[data-cy="dana"] > .linkedin > .linkedin-icon')
      .should('exist')
      .get('[data-cy="dana"] > .linkedin > .webLink')
      .should('exist');

    cy.get('[data-cy="emily"]')
      .should('exist')
      .get('[data-cy="emily"] > h4')
      .should('exist')
      .contains('Emily Miles')
      .get('[data-cy="emily"] > .github')
      .should('exist')
      .get('[data-cy="emily"] > .github > .github-icon')
      .should('exist')
      .get('[data-cy="emily"] > .github > .webLink')
      .should('exist')
      .get('[data-cy="emily"] > .linkedin')
      .should('exist')
      .get('[data-cy="emily"] > .linkedin > .linkedin-icon')
      .should('exist')
      .get('[data-cy="emily"] > .linkedin > .webLink')
      .should('exist');

    cy.get('[data-cy="taryn"]')
      .should('exist')
      .get('[data-cy="taryn"] > h4')
      .should('exist')
      .contains('Taryn Orlemann')
      .get('[data-cy="taryn"] > .github')
      .should('exist')
      .get('[data-cy="taryn"] > .github > .github-icon')
      .should('exist')
      .get('[data-cy="taryn"] > .github > .webLink')
      .should('exist')
      .get('[data-cy="taryn"] > .linkedin')
      .should('exist')
      .get('[data-cy="taryn"] > .linkedin > .linkedin-icon')
      .should('exist')
      .get('[data-cy="taryn"] > .linkedin > .webLink')
      .should('exist');

    cy.get('[data-cy="thomas"]')
      .should('exist')
      .get('[data-cy="thomas"] > h4')
      .should('exist')
      .contains('Thomas Hayes')
      .get('[data-cy="thomas"] > .github')
      .should('exist')
      .get('[data-cy="thomas"] > .github > .github-icon')
      .should('exist')
      .get('[data-cy="thomas"] > .github > .webLink')
      .should('exist')
      .get('[data-cy="thomas"] > .linkedin')
      .should('exist')
      .get('[data-cy="thomas"] > .linkedin > .linkedin-icon')
      .should('exist')
      .get('[data-cy="thomas"] > .linkedin > .webLink')
      .should('exist');

    cy.get('[data-cy="will"]')
      .should('exist')
      .get('[data-cy="will"] > h4')
      .should('exist')
      .contains('Will Hobson')
      .get('[data-cy="will"] > .github')
      .should('exist')
      .get('[data-cy="will"] > .github > .github-icon')
      .should('exist')
      .get('[data-cy="will"] > .github > .webLink')
      .should('exist')
      .get('[data-cy="will"] > .linkedin')
      .should('exist')
      .get('[data-cy="will"] > .linkedin > .linkedin-icon')
      .should('exist')
      .get('[data-cy="will"] > .linkedin > .webLink')
      .should('exist');
  });

  it('Should be able to go back to the Landing Page', () => {
    cy.get('button')
      .click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
