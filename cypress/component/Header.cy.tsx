import Header from 'components/Header';

describe('Header', () => {
  it('O componente é renderizado', () => {
    cy.mount(<Header />);
  });
});

export {};
