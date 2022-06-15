describe('Browsing the store', () => {
  beforeEach('teste', () => {
    cy.intercept('/products?page=1&limit=12', { fixture: 'wine-api-1.json' });
    cy.intercept('/products?page=2&limit=12', { fixture: 'wine-api-2.json' });
  });

  describe('Accessing product details', () => {
    it('By clicking on the card, you are redirected to the product details page', () => {
      cy.intercept({
        method: 'GET',
        url: '/products*',
      }).as('api');
      
      cy.visit('/');

      cy.wait('@api');
  
      cy.get('[data-cy="home_page_card_product-0"]')
        .click();

      cy.url().should('include', '/product/0');

      cy.get('[data-cy="details_products_name_product"]')
        .contains('Produto 1');

      cy.get('[data-cy="details_products_page_btn_back"]')
        .click();
      
      cy.get('[data-cy="home_page_card_product-1"]')
        .click();

      cy.url().should('include', '/product/1');

      cy.get('[data-cy="details_products_name_product"]')
        .contains('Produto 2');
      });
  });

  describe('Navigating between pages', () => {
    it('On first page, previous page button is disabled', () => {
      cy.intercept({
        method: 'GET',
        url: '/products*',
      }).as('api');

      cy.visit('/');

      cy.wait('@api');

      cy.get('[data-cy="home_page_navigate_btn-previous"]')
        .should('be.disabled');
    });

    it('Current page button changes color', () => {
      cy.intercept({
        method: 'GET',
        url: '/products*',
      }).as('api');

      cy.visit('/');

      cy.wait('@api');

      cy.get('[data-cy="home_page_navigate_btn-0"]')
        .should('have.css', 'background-color', 'rgb(168, 36, 114)');

      cy.get('[data-cy="home_page_navigate_btn-1"]')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .click();

      cy.wait('@api');

      cy.get('[data-cy="home_page_navigate_btn-previous"]')
        .should('not.be.disabled');

      cy.get('[data-cy="home_page_navigate_btn-0"]')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
      
      cy.get('[data-cy="home_page_navigate_btn-1"]')
        .should('have.css', 'background-color', 'rgb(168, 36, 114)');
    });

    it('On the last page, the next page button is disabled', () => {
      cy.intercept({
        method: 'GET',
        url: '/products*',
      }).as('api');
      
      cy.visit('/');

      cy.wait('@api');

      cy.get('[data-cy="home_page_navigate_btn-1"]')
        .click();

      cy.wait('@api');

      cy.get('[data-cy="home_page_navigate_btn-previous"]')
        .should('not.be.disabled');

      cy.get('[data-cy="home_page_navigate_btn-next"]')
        .should('be.disabled');
    });
  });

  describe('Adding products to winebox', () => {
    it('When adding a product to the winebox, the count number increases', () => {
      cy.intercept({
        method: 'GET',
        url: '/products*',
      }).as('api');

      cy.visit('/');

      cy.wait('@api');

      cy.get('[data-cy="winebox-btn-count"]')
        .contains('0');

      cy.get('[data-cy="card_product-btn-add-0"]')
        .click();

      cy.get('[data-cy="card_product-btn-add-1"]')
        .click();

      cy.get('[data-cy="card_product-btn-add-2"]')
        .click();

      cy.get('[data-cy="winebox-btn-count"]')
        .contains('3');
    });
  });
});

export {};
