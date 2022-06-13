import { useContext, useState } from 'react';
import { AppContext } from 'contexts/AppProvider';
import { SectionFlexProduct } from 'styles/Containers';
import Image from 'next/image';
import StarsAvaliations from './StarsAvaliations';
import {
  BtnContainer,
  ImageContainer,
  InfoContainer,
  LinksNavigate,
  ProductComment,
  ProductDetail,
  ProductName,
  ProductPrice
} from 'styles/pages/product/Informations';

const ProductInformation = () => {
  const { productFocus, saveInCart } = useContext(AppContext);
  const [count, setCount] = useState(1);

  
  const increment = () => {
    setCount(count + 1);
  };
  
  const decrement = () => {
    setCount(count - 1);
  };
  
  if (!productFocus) {
    return (
      <h1>Deu erro!</h1>
    );
  };
  
  const { name, image, id, priceMember, priceNonMember  } = productFocus;
    
  return (
    <SectionFlexProduct>
      <ImageContainer>
        <Image
          src={ productFocus.image }
          alt="Product"
          width="100%" height="100%" layout="responsive" objectFit="contain"
        />
      </ImageContainer>
      <InfoContainer>
        <LinksNavigate>
          <a href="">Vinhos</a> &gt; <a href="">{ productFocus.country }</a> &gt; { productFocus.region }
        </LinksNavigate>
        <ProductName>{ productFocus.name }</ProductName>
        <ProductDetail>
          <Image
            src={ productFocus.flag }
            alt="Flag"
            width={ 20 }
            height={ 20 }
          />
          <span>{ productFocus.country }</span>
          <span>{ productFocus.type }</span>
          <span>{ productFocus.classification }</span>
          <span>{ productFocus.volume }</span>
          <StarsAvaliations avaliation={ productFocus.rating } />
          <span>({ productFocus.avaliations || 0 })</span>
        </ProductDetail>
        <ProductPrice>{ `R$ ${ productFocus.priceMember.toFixed(2) }` }</ProductPrice>
        <h3>{ `NÃO SÓCIO R$ ${ productFocus.priceNonMember.toFixed(2) }/un.` }</h3>

        <h4>Comentário do Sommelier</h4>

        <ProductComment>{ productFocus.sommelierComment }</ProductComment>
        <BtnContainer>
          <div>
            <button
              disabled={ count === 1 ? true : false }
              onClick={ decrement }
            >
              -
            </button>
            <span>{ count }</span>
            <button onClick={ increment }>+</button>
          </div>
          <button onClick={ () => saveInCart({ name, image, id, priceMember, priceNonMember }, count) }>
            Adicionar
          </button>
        </BtnContainer>
      </InfoContainer>
    </SectionFlexProduct>
  );
};

export default ProductInformation;
