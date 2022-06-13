import { HeaderContainer, HeaderContent, Navbar, BtnsHeader, Logo } from 'styles/Header';
import Image from 'next/image';
import MenuMobileBtn from 'components/BtnMenuMobile';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <MenuMobileBtn />
          <Image
            src="/images/wine_logo.svg"
            alt="Landscape picture"
            width={ 100 }
            height={ 80 }
          />
        </Logo>

        <Navbar>
          <ul>
            <li><a href="">Clube</a></li>
            <li><a href="">Loja</a></li>
            <li><a href="">Produtores</a></li>
            <li><a href="">Ofertas</a></li>
            <li><a href="">Eventos</a></li>
          </ul>
        </Navbar>

        <BtnsHeader>
          <button>
            <Image
              src="/images/search_icon.svg"
              alt="Search Icon"
              width={ 50 }
              height={ 50 }
            />
          </button>
          <button>
            <Image
              src="/images/user_icon.svg"
              alt="User Icon"
              width={ 50 }
              height={ 50 }
            />
          </button>
          <button>
            <div>
              <Image
                src="/images/cart_icon.png"
                alt="Cart Icon"
                width={ 40 }
                height={ 50 }
              />
            </div>
            <div>
              0
            </div>
          </button>
        </BtnsHeader>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
