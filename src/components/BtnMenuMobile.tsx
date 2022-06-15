import Image from 'next/image';
import { useState } from 'react';
import { BtnMenu, Menu, MenuContainer } from 'styles/components/Header';

const MenuMobileBtn = () => {
  const [viewMenu, setView] = useState(false);

  return (
    <>
      <BtnMenu onClick={ () => setView(true) }>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </BtnMenu>

      <MenuContainer style={{ display: viewMenu ? 'block' : 'none' }}>
        <Menu>
          <button onClick={ () => setView(false) }>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>

          <Image
            src="/images/wine_logo.svg"
            alt="Wine Logo"
            width={ 100 }
            height={ 30 }
          />

          <nav>
            <ul>
              <li><a href="#">Clube</a></li>
              <li><a href="#">Loja</a></li>
              <li><a href="#">Produtores</a></li>
              <li><a href="#">Ofertas</a></li>
              <li><a href="#">Eventos</a></li>
            </ul>
          </nav>
        </Menu>
      </MenuContainer>
    </>
  );
};

export default MenuMobileBtn;
