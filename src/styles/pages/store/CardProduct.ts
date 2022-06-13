import styled from 'styled-components';

const CardContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  width: 260px;

  @media(max-width: 570px) {
    width: 200px;
  }
`;

const Card = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 9px 14px rgba(0, 0, 0, 0.1);
  height: 360px;
  padding: 10px;
`;

const ProductImage = styled.div`
  min-height: 220px;
  width: 220px;
  margin: 0 auto;

  @media(max-width: 900px) {
    width: 100%;
  }
`;

const ProductName = styled.h4`
  margin: 10px 0;
`;

const ProductDiscount = styled.p`
  font-size: 12px;
  margin-bottom: 10px;

  del {
    color: #888888;
  }

  span {
    color: white;
    background-color: #F79552;
    border-radius: 2px;
    padding: 0 5px;
  }
`;

const ProductPriceSocial = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;

  span {
    color: #b6116e;

    span {
      font-size: 20px;
    }
  }
`;

const ProductPriceNoSocial = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 10px;
  color: #888888;
`;

const BtnAddProductCart = styled.button`
  background-color: #7EBC43;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  margin-top: 16px;
  padding: 10px;
  text-transform: uppercase;
  width: 100%;
`;

export {
  CardContainer,
  Card,
  ProductImage,
  ProductName,
  ProductDiscount,
  ProductPriceSocial,
  ProductPriceNoSocial,
  BtnAddProductCart
};
