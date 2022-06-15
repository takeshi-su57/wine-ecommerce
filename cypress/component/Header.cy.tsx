import Header from 'components/Header';

describe('Header', () => {
  it('O componente é renderizado', () => {
    cy.mount(<Header />);

    cy.get('[data-cy="header_logo"]')
      .contains('Wine');
    
    cy.get('[data-cy="header_navbar"]')
      .contains('Loja');
  });
});

export {};
