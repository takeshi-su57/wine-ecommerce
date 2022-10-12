import Image from 'next/image';
import MenuMobileBtn from 'components/BtnMenuMobile';
import Router from 'next/router';
import { useContext, useState, MouseEvent } from 'react';
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
import Link from 'next/link';

const Header = () => {
  const { cartCount, setViewCart, getProductsFromApi } = useContext(AppContext);
  const [viewSearch, setViewSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const submitSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    getProductsFromApi(1, '', searchQuery);
  };

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
            <li><a href="#">Club</a></li>
            <li><Link href={'/'}>Shop</Link></li>
            <li><a href="#">Producers</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Events</a></li>
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
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Pesquisar"
            onChange={ (e) => setSearchQuery(e.target.value) }
            autoComplete="off"
          />
          <label htmlFor="search">
            press enter to search
          </label>
          <button onClick={ submitSearch }>
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
