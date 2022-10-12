import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BtnMenu, Menu, MenuContainer } from 'styles/components/Header';

const MenuMobileBtn = () => {
  const [viewMenu, setView] = useState(false);

  return (
    <>
      <BtnMenu onClick={ () => setView(true) }>
        <Image
          src="/icons/menu_mobile.svg"
          alt="Menu mobile icon"
          width={30}
          height={40}
        />
      </BtnMenu>

      <MenuContainer style={{ display: viewMenu ? 'block' : 'none' }}>
        <Menu>
          <button onClick={ () => setView(false) }>
            <Image
              src="/icons/arrow_back_menu.svg"
              alt="Menu mobile icon"
              width={30}
              height={30}
            />  
          </button>

          <Image
            src="/images/wine_logo.svg"
            alt="Wine Logo"
            width={ 100 }
            height={ 30 }
          />

          <nav>
            <ul>
              <li><a href="#">Club</a></li>
              <li><Link href={'/'}>Loja</Link></li>
              <li><a href="#">Producers</a></li>
              <li><a href="#">Offers</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </nav>
        </Menu>
      </MenuContainer>
    </>
  );
};

export default MenuMobileBtn;
