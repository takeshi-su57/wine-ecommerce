import Image from 'next/image';
import MenuMobileBtn from 'components/BtnMenuMobile';
import Router from 'next/router';
import { useContext, useState } from 'react';
import { AppContext } from 'contexts/AppProvider';
import {
  HeaderContainer,
  HeaderContent,
  Navbar,
  BtnsHeader,
  Logo,
  SearchContainer,
  SearchContent,
} from 'styles/components/Header';

const Header = () => {
  const { cartCount, setViewCart } = useContext(AppContext);
  const [viewSearch, setViewSearch] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <MenuMobileBtn />
          <Image
            src="/images/wine_logo.svg"
            alt="Wine Logo"
            width={ 100 }
            height={ 80 }
            onClick={ () => Router.push('/') }
            style={ { cursor: 'pointer' } }
          />
        </Logo>

        <Navbar>
          <ul>
            <li><a href="#">Clube</a></li>
            <li><a href="#">Loja</a></li>
            <li><a href="#">Produtores</a></li>
            <li><a href="#">Ofertas</a></li>
            <li><a href="#">Eventos</a></li>
          </ul>
        </Navbar>

        <BtnsHeader>
          <button onClick={ () => setViewSearch(viewSearch ? false : true) }>
            <Image
              src="/icons/search_icon.svg"
              alt="Search Icon"
              width={ 50 }
              height={ 50 }
            />
          </button>
          <button>
            <Image
              src="/icons/user_icon.svg"
              alt="User Icon"
              width={ 50 }
              height={ 50 }
            />
          </button>
          <button onClick={ () => setViewCart(true) } data-cy="winebox-btn">
            <div>
              <Image
                src="/images/cart_icon.png"
                alt="WineBox Icon"
                width={ 40 }
                height={ 50 }
              />
            </div>
            <div data-cy="winebox-btn-count">
              { cartCount }
            </div>
          </button>
        </BtnsHeader>
      </HeaderContent>

      <SearchContainer viewContainer={ viewSearch }>
        <SearchContent>
          <input type="text" name="" id="search" placeholder="Pesquisar" />
          <label htmlFor="search">
            aperte enter para buscar
          </label>
          <button onClick={ () => Router.push('/search') }>
            <Image
              src="/icons/search.svg"
              alt="Search icon"
              width={ 25 }
              height={ 25 }
            />
          </button>
        </SearchContent>
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
