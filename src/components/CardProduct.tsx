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

const CardProduct = () => {
  return (
    <CardContainer>
      <Card>
        <ProductImage>
          Imagem Produto
        </ProductImage>
        <ProductName>
          Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014
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
