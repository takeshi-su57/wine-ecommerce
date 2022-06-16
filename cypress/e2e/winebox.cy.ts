describe('WineBox', () => {
  beforeEach('Mock api', () => {
    cy.intercept('/products?page=1&limit=12&filter=&name=', { fixture: 'wine-api-1.json' });
    cy.intercept('/products?page=2&limit=12&filter=&name=', { fixture: 'wine-api-2.json' });
  });

  describe.only('Accessing WineBox', () => {
    it('WineBox is empty', () => {
      cy.intercept({
        method: 'GET',
        url: '/products*',
      }).as('api');

      cy.visit('/');

      cy.wait('@api');

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

      cy.get('[data-cy="winebox-btn"]')
        .should('be.visible')
        .click();

      cy.get('[data-cy="winebox-header"]')
        .contains('WineBox (3)');

      cy.get('[data-cy="winebox-body"]')
        .should('be.visible');

      cy.get('[data-cy="winebox-card-product-0"]')
        .should('be.visible').then(() => {
        cy.get('[data-cy="winebox-card-product-name-0"]')
          .contains('Produto 1');

        cy.get('[data-cy="winebox-card-product-price-mult-0"]')
          .contains('R$ 100,00 x 1');

        cy.get('[data-cy="winebox-card-product-price-0"]')
          .contains('R$ 100,00');
      });

      cy.get('[data-cy="winebox-card-product-1"]')
        .should('be.visible').then(() => {
        cy.get('[data-cy="winebox-card-product-name-1"]')
          .contains('Produto 2');

        cy.get('[data-cy="winebox-card-product-price-mult-1"]')
          .contains('R$ 50,00 x 1');

        cy.get('[data-cy="winebox-card-product-price-1"]')
          .contains('R$ 50,00');
      });

      cy.get('[data-cy="winebox-card-product-2"]')
        .should('be.visible').then(() => {
        cy.get('[data-cy="winebox-card-product-name-2"]')
          .contains('Produto 3');

        cy.get('[data-cy="winebox-card-product-price-mult-2"]')
          .contains('R$ 150,00 x 1');

        cy.get('[data-cy="winebox-card-product-price-2"]')
          .contains('R$ 150,00');
      });

      cy.get('[data-cy="winebox-footer"]')
        .should('be.visible').then(() => {
          cy.get('[data-cy="winebox-footer-total-price"]')
            .contains('R$ 300,00');
        });
    });

    it('Add more units from a winebox item', () => {
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

      cy.get('[data-cy="card_product-btn-add-2"]')
        .dblclick();

      cy.get('[data-cy="winebox-btn"]')
        .should('be.visible')
        .click();

      cy.get('[data-cy="winebox-header"]')
        .contains('WineBox (3)');

      cy.get('[data-cy="winebox-card-product-2"]')
        .should('be.visible').then(() => {
          cy.get('[data-cy="winebox-card-product-price-mult-2"]')
            .contains('R$ 150,00 x 3');

          cy.get('[data-cy="winebox-card-product-price-2"]')
            .contains('R$ 450,00');
        });

      cy.get('[data-cy="winebox-footer"]')
        .should('be.visible').then(() => {
          cy.get('[data-cy="winebox-footer-total-price"]')
            .contains('R$ 600,00');
        });

      cy.get('[data-cy="winebox-btn-back"]')
        .should('be.visible')
        .click();

      cy.get('[data-cy="card_product-btn-add-0"]')
        .click();

      cy.get('[data-cy="card_product-btn-add-1"]')
        .dblclick();

      cy.get('[data-cy="winebox-btn"]')
        .should('be.visible')
        .click();

      cy.get('[data-cy="winebox-card-product-0"]')
        .should('be.visible').then(() => {
          cy.get('[data-cy="winebox-card-product-price-mult-0"]')
            .contains('R$ 100,00 x 2');

          cy.get('[data-cy="winebox-card-product-price-0"]')
            .contains('R$ 200,00');
        });

      cy.get('[data-cy="winebox-card-product-1"]')
        .should('be.visible').then(() => {
          cy.get('[data-cy="winebox-card-product-price-mult-1"]')
            .contains('R$ 50,00 x 3');

          cy.get('[data-cy="winebox-card-product-price-1"]')
            .contains('R$ 150,00');
        });

      cy.get('[data-cy="winebox-footer"]')
        .should('be.visible').then(() => {
          cy.get('[data-cy="winebox-footer-total-price"]')
            .contains('R$ 800,00');
        });
    });

    it('Remove items from winebox', () => {
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
        .dblclick();

      cy.get('[data-cy="winebox-btn-count"]')
        .contains('2');

      cy.get('[data-cy="winebox-btn"]')
        .should('be.visible')
        .click();

      cy.get('[data-cy="winebox-header"]')
        .contains('WineBox (2)');

      cy.get('[data-cy="winebox-footer-total-price"]')
        .contains('R$ 200,00');

      cy.get('[data-cy="winebox-card-product-btn-delete-1"]')
        .click();

      cy.get('[data-cy="winebox-footer-total-price"]')
        .contains('R$ 100,00');

      cy.get('[data-cy="winebox-card-product-btn-delete-0"]')
        .click();

      cy.get('[data-cy="winebox-body"]')
        .contains('Você ainda não escolheu seus produtos');
    });
  });
});

export {};
