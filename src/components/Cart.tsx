import { AppContext } from 'contexts/AppProvider';
import { ProductCart } from 'contexts/types';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { WineBoxBackContainer, WineBoxContainer, WineBoxHeader } from 'styles/WineBox';
import { ArrowBack } from './icons';

const Cart = () => {
  const { setViewCart } = useContext(AppContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('cart_wine');

    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  return (
    <>
      <WineBoxBackContainer onClick={ () => setViewCart(false) } />

      <WineBoxContainer>
        <WineBoxHeader>
          <span  onClick={ () => setViewCart(false) }>
            <ArrowBack />
            <span>WineBox (5)</span>
          </span>
        </WineBoxHeader>
      </WineBoxContainer>
    </>
  );
};

export default Cart;


{
  /* <CartContainer onClick={ () => console.log('2') } style={ { zIndex: '2000' } }>
  <BtnCloseCart onClick={ () => setViewCart(false) }>
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"></path><path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path></svg>
  </BtnCloseCart>

  {
    cart.map((product: ProductCart, i: number) => (
      <CardProductCart key={ i }>
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
            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path></svg>
          </button>
        </div>
      </CardProductCart>
    ))
  }

  <BtnFinalized>Finalizar compra</BtnFinalized>
</CartContainer> */
}
