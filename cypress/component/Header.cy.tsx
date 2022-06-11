import Header from 'components/layout/Header';

describe('Header', () => {
  it('O componente é renderizado', () => {
    cy.mount(<Header />);
  });
});

export {};
