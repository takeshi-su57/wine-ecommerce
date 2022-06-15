describe('Browsing the store', () => {
  beforeEach('teste', () => {
    cy.intercept('/products*', { fixture: 'wine-api.json' });
  });

  describe.only('Testando Mock', () => {
    it('vendo pagina principal', () => {
      cy.visit('/');
    })
  });

  describe('Accessing product details', () => {
    it('By clicking on the card, you are redirected to the product details page', () => {
      cy.intercept({
        method: 'GET',
        url: '/products*',
      }).as('apiGetAllProducts');
      
      cy.visit('/');

      cy.wait('@apiGetAllProducts');
  
      cy.get('[data-cy="home_page_card_product-0"]')
        .click();

      cy.url().should('include', '/product/0');

      cy.get('[data-cy="details_products_page_btn_back"]')
        .click();
      
      cy.get('[data-cy="home_page_card_product-1"]')
        .click();

      cy.url().should('include', '/product/1');
    });
  });

  describe('Navigating between pages', () => {
    it('On first page, previous page button is disabled', () => {
      cy.visit('/');

      cy.get('[data-cy="home_page_navigate_btn-previous"]')
        .should('be.disabled');
    });

    it('Current page button changes color', () => {
      cy.intercept({
        method: 'GET',
        url: '/products*',
      }).as('apiGetAllProducts');

      cy.visit('/');

      cy.get('[data-cy="home_page_navigate_btn-0"]')
        .should('have.css', 'background-color', 'rgb(168, 36, 114)');

      cy.get('[data-cy="home_page_navigate_btn-1"]')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .click();

      cy.wait('@apiGetAllProducts');

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
      }).as('apiGetAllProducts');
      
      cy.visit('/');

      cy.wait('@apiGetAllProducts');

      cy.get('[data-cy="home_page_navigate_btn-5"]')
        .click();

      cy.wait('@apiGetAllProducts');

      cy.get('[data-cy="home_page_navigate_btn-next"]')
        .should('be.disabled');
    });
  });

  describe('Adding products to winebox', () => {
    it('When adding a product to the winebox, the count number increases', () => {
      cy.visit('/');

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

  describe('Accessing WineBox', () => {
    it('WineBox is empty', () => {
      cy.visit('/');

      cy.get('[data-cy="winebox-btn"]')
        .should('be.visible')
        .click();

      cy.get('[data-cy="winebox-container"]')
        .should('be.visible');

      cy.get('[data-cy="winebox-header"]')
        .contains('WineBox (0)');

      cy.get('[data-cy="winebox-body"]')
        .contains('Você ainda não escolheu seus produtos');

      cy.get('[data-cy="winebox-btn-back"]')
        .should('be.visible')
        .click();
    });

    it('WineBox has some items', () => {
      cy.visit('/');

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

      cy.get('[data-cy="winebox-btn"]')
        .should('be.visible')
        .click();

      cy.get('[data-cy="winebox-header"]')
        .contains('WineBox (3)');

      cy.get('[data-cy="winebox-body"]')
        .should('be.visible');

      cy.get('[data-cy="winebox-card-product-0"]')
        .should('be.visible');

      cy.get('[data-cy="winebox-card-product-1"]')
        .should('be.visible');

      cy.get('[data-cy="winebox-card-product-2"]')
        .should('be.visible');

      cy.get('[data-cy="winebox-footer"]')
        .should('be.visible');
      
      cy.get('[data-cy="winebox-btn-back"]')
        .should('be.visible')
        .click();
    });
  });
});

export {};
