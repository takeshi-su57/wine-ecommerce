describe('Browsing the store', () => {
  beforeEach('Mock api', () => {
    cy.intercept('/products?page=1&limit=12', { fixture: 'wine-api-1.json' });
    cy.intercept('/products?page=2&limit=12', { fixture: 'wine-api-2.json' });
    cy.intercept('/products?page=1&limit=12&filter=0-40', { fixture: 'wine-api-3.json' });
    cy.intercept('/products?page=1&limit=12&filter=40-60', { fixture: 'wine-api-4.json' });
    cy.intercept('/products?page=1&limit=12&filter=100-200', { fixture: 'wine-api-5.json' });
    cy.intercept('/products?page=1&limit=12&filter=200-500', { fixture: 'wine-api-6.json' });
    cy.intercept('/products?page=1&limit=12&filter=500-', { fixture: 'wine-api-7.json' });
  });

  describe('First page render', () => {
    it('Must have initial information', () => {
      cy.intercept({
        method: 'GET',
        url: '/products*',
      }).as('api');
      
      cy.visit('/');

      cy.wait('@api');
  
      cy.get('[data-cy="home_page_info_find_products"]')
        .contains('14 produtos encontrados');

      cy.get('[data-cy="home_page_card_product-0"]')
        .contains('Produto 1');
      
      cy.get('[data-cy="home_page_card_product-1"]')
        .contains('Produto 2');

      cy.get('[data-cy="home_page_card_product-2"]')
        .contains('Produto 3');
    });
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

  describe('Filter products by price', () => {
    it('Select the "Até R$40" filter', () => {
      cy.intercept({
        method: 'GET',
        url: '/products*',
      }).as('api');

      cy.visit('/');

      cy.wait('@api');

      cy.get('[data-cy="filter-radio-1"]')
        .contains('Até R$40')
        .click();

      cy.wait('@api');

      cy.get('[data-cy="home_page_info_find_products"]')
        .contains('4 produtos encontrados');

      cy.get('[data-cy="home_page_card_product-0"]')
        .contains('Produto 5');

      cy.get('[data-cy="home_page_card_product-1"]')
        .contains('Produto 6');

      cy.get('[data-cy="home_page_card_product-2"]')
        .contains('Produto 10');

      cy.get('[data-cy="home_page_card_product-3"]')
        .contains('Produto 12');
    });

    it('Select the "R$40 A R$60" filter', () => {
      cy.intercept({
        method: 'GET',
        url: '/products*',
      }).as('api');

      cy.visit('/');

      cy.wait('@api');

      cy.get('[data-cy="filter-radio-2"]')
        .contains('R$40 A R$60')
        .click();

      cy.wait('@api');

      cy.get('[data-cy="home_page_info_find_products"]')
        .contains('2 produtos encontrados');

      cy.get('[data-cy="home_page_card_product-0"]')
        .contains('Produto 2');

      cy.get('[data-cy="home_page_card_product-1"]')
        .contains('Produto 14');
    });
    
    it('Select the "R$100 A R$200" filter', () => {
      cy.intercept({
        method: 'GET',
        url: '/products*',
      }).as('api');

      cy.visit('/');

      cy.wait('@api');

      cy.get('[data-cy="filter-radio-3"]')
        .contains('R$100 A R$200')
        .click();

      cy.wait('@api');

      cy.get('[data-cy="home_page_info_find_products"]')
        .contains('7 produtos encontrados');

      cy.get('[data-cy="home_page_card_product-0"]')
        .contains('Produto 1');

      cy.get('[data-cy="home_page_card_product-1"]')
        .contains('Produto 3');

      cy.get('[data-cy="home_page_card_product-2"]')
        .contains('Produto 4');
    });

    it('Select the "R$200 A R$500" filter', () => {
      cy.intercept({
        method: 'GET',
        url: '/products*',
      }).as('api');

      cy.visit('/');

      cy.wait('@api');

      cy.get('[data-cy="filter-radio-4"]')
        .contains('R$200 A R$500')
        .click();

      cy.wait('@api');

      cy.get('[data-cy="home_page_info_find_products"]')
        .contains('3 produtos encontrados');

      cy.get('[data-cy="home_page_card_product-0"]')
        .contains('Produto 4');

      cy.get('[data-cy="home_page_card_product-1"]')
        .contains('Produto 8');
    });

    it('Select the "Acima de R$500" filter', () => {
      cy.intercept({
        method: 'GET',
        url: '/products*',
      }).as('api');

      cy.visit('/');

      cy.wait('@api');

      cy.get('[data-cy="filter-radio-5"]')
        .contains('Acima de R$500')
        .click();

      cy.wait('@api');

      cy.get('[data-cy="home_page_info_find_products"]')
        .contains('1 produtos encontrados');

      cy.get('[data-cy="home_page_card_product-0"]')
        .contains('Produto 9');
    });

    /* it('Select the "Todos os preços" filter', () => {
      cy.intercept({
        method: 'GET',
        url: '/products*',
      }).as('api');

      cy.visit('/');

      cy.wait('@api');

      cy.get('[data-cy="filter-radio-default"]')
        .contains('Todos os preços')
        .click();

      cy.wait('@api');

      cy.get('[data-cy="home_page_info_find_products"]')
        .contains('14 produtos encontrados');

      cy.get('[data-cy="home_page_card_product-0"]')
        .contains('Produto 1');
      
      cy.get('[data-cy="home_page_card_product-1"]')
        .contains('Produto 2');

      cy.get('[data-cy="home_page_card_product-2"]')
        .contains('Produto 3');
    }); */
  });
});

export {};
