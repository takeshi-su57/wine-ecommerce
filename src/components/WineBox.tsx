import { AppContext } from 'contexts/AppProvider';
import { ProductCart } from 'contexts/types';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { CardProduct, BackContainer, Body, Container, Footer, Header, NoProducts } from 'styles/WineBox';
import { ArrowBack, Close } from './icons';

const Cart = () => {
  const { setViewCart } = useContext(AppContext);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem('cart_wine');

    if (data) {
      const { items, totalPrice } = JSON.parse(data);
      setCart(items);
      setTotal(totalPrice);
    }
  }, []);

  if (cart.length === 0) {
    return (
      <>
      <BackContainer onClick={ () => setViewCart(false) } />

      <Container>
        <Header>
          <span  onClick={ () => setViewCart(false) }>
            <ArrowBack />
            <span>WineBox ({ cart.length })</span>
          </span>
        </Header>

        <NoProducts>
          <span>
            Você ainda não escolheu seus produtos
          </span>
        </NoProducts>
      </Container>
    </>
    );
  };

  return (
    <>
      <BackContainer onClick={ () => setViewCart(false) } />

      <Container>
        <Header>
          <span  onClick={ () => setViewCart(false) }>
            <ArrowBack />
            <span>WineBox ({ cart.length })</span>
          </span>
        </Header>

        <Body>
          {
            cart.map((product: ProductCart, i: number) => (
              <CardProduct key={ i }>
                <div>
                  <Image
                    src={ product.image }
                    alt="Landscape picture"
                    width="100%" height="100%" layout="responsive" objectFit="contain"
                  />
                </div> 
                <div>
                  <h3>{ product.name }</h3>
                  <span>
                    <h4>{ `R$ ${product.priceMember.toFixed(2).replace(/\./, ',')} x  ${ product.quantity }` }</h4>
                    <h2>{ `R$ ${
                      (product.priceMember*product.quantity).toFixed(2).replace(/\./, ',')
                    }` }</h2>
                  </span>
                  <button>
                    <Close />
                  </button>
                </div>
              </CardProduct>
            ))
          }
        </Body>

        <Footer>
          <div>
            <span>Total</span>
            <span>
              R$ { total.toFixed(2).replace(/\./, ',') }
            </span>
          </div>

          <button>
            Finalizar pedido
          </button>
        </Footer>
      </Container>
    </>
  );
};

export default Cart;
