import Router from 'next/router';
import { ProductCard } from 'contexts/types';
import {
  BtnAddProductCart,
  Card,
  CardContainer,
  ProductDiscount,
  ProductImage,
  ProductName,
  ProductPriceNoSocial,
  ProductPriceSocial,
} from 'styles/components/CardProduct';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { AppContext } from 'contexts/AppProvider';

const CardProduct = ({ name, image, id, priceMember, priceNonMember, price, discount }: ProductCard) => {
  const { defineFocusProduct, saveInCart } = useContext(AppContext);
  const [status, setStatus] = useState('Adicionar');

  const addInWineBox = () => {
    setStatus('Salvando...');
    saveInCart({ name, image, id, priceMember, priceNonMember }, 1)

    setTimeout(() => {
      setStatus('Adicionado ao WineBox!');
    }, 2000);

    setTimeout(() => {
      setStatus('Adicionar');
    }, 4000);
  };

  return (
    <CardContainer>
      <Card 
        onClick={ () => {
          defineFocusProduct(id);
          Router.push(`/product/${id}`);
        }}
        data-cy={`home_page_card_product-${id}`}
      >
        <ProductImage>
          <Image
            src={ image }
            alt="Product Preview"
            width="100%" height="100%" layout="responsive" objectFit="contain"
          />
        </ProductImage>
        <ProductName>
          { name }
        </ProductName>
        <ProductDiscount>
          <del>{ `R$ ${ price.toFixed(2).replace(/\./, ',') }` }</del>
          <span>{ discount }% OFF</span>
        </ProductDiscount>
        <ProductPriceSocial>
          Sócio wine <span>R$ <span>{ priceMember.toFixed(2).replace(/\./, ',') }</span></span>
        </ProductPriceSocial>
        <ProductPriceNoSocial>
          Não sócio R$ { priceNonMember.toFixed(2).replace(/\./, ',') }
        </ProductPriceNoSocial>
      </Card>
      <BtnAddProductCart
        onClick={ () => addInWineBox() }
        data-cy={`card_product-btn-add-${id}`}
        progress={ status !== 'Adicionar' }
      >
        { status }
      </BtnAddProductCart>
    </CardContainer>
  );
};

export default CardProduct;
