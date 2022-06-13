import { ProductCard } from "contexts/types";
import {
  BtnAddProductCart,
  Card,
  CardContainer,
  ProductDiscount,
  ProductImage,
  ProductName,
  ProductPriceNoSocial,
  ProductPriceSocial,
} from "styles/pages/store/CardProduct";
import Image from 'next/image';

const CardProduct = ({ name, image }: ProductCard) => {
  return (
    <CardContainer>
      <Card>
        <ProductImage>
          <Image
            src={ image }
            alt="Landscape picture"
            width="100%" height="100%" layout="responsive" objectFit="contain"
          />
        </ProductImage>
        <ProductName>
          { name }
        </ProductName>
        <ProductDiscount>
          <del>R$ 37,40</del> <span>60% OFF</span>
        </ProductDiscount>
        <ProductPriceSocial>
          Sócio wine <span>R$ <span>30</span>,00</span>
        </ProductPriceSocial>
        <ProductPriceNoSocial>
          Não sócio R$ 37,40
        </ProductPriceNoSocial>
      </Card>
      <BtnAddProductCart>
        Adicionar
      </BtnAddProductCart>
    </CardContainer>
  );
};

export default CardProduct;
