describe('Home page', () => {
  it('O titulo é renderizado', () => {
    cy.visit('/');

    cy.get('[data-cy="home_page_title"]')
      .contains('Hello World');
  });
});
