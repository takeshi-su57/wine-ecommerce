import styled from 'styled-components';

const BtnGoBack = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
`;

const ImageContainer = styled.div`
  width: 50%;
  min-height: 500px;
`;

const InfoContainer = styled.section`
  width: 50%;
`;

const LinksNavigate = styled.div`
  color: #888888;
  font-weight: 500;

  a {
    color: #C81A78;
    text-decoration: none;

    &:nth-child(1) {
      margin-right: 5px;
    }

    &:nth-child(2) {
      margin: 0 5px;
    }
  }
`;

const ProductName = styled.h1`
  font-size: 35px;
  margin: 15px 0;
`;

const ProductDetail = styled.div`
  color: #555555;
  display: flex;

  span {
    margin: 0 10px;
  }
`;

const ProductPrice = styled.h2`
  font-size: 35px;
  margin-top: 40px;
  margin-bottom: 5px;
  color: #C81A78;

  ~ h3 {
    color: #888888;
    margin-bottom: 40px;
  }

  ~ h4 {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const ProductComment = styled.p`
  color: #666666;
  margin-bottom: 20px;
`;

const BtnContainer = styled.div`
  background-color: #7EBC43;
  display: flex;
  justify-content: space-around;
  width: 300px;
  color: white;
  border-radius: 2px;
  font-size: 24px;
  padding: 15px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);

  div {
    span {
      margin: 0 20px;
    }

    button {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      border: 1px solid white;

      &:disabled {
        cursor: auto;
        color: #ececec3e;
        border: 1px solid #ececec3e;
      }
    }
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 18px;
  }
`;

export {
  BtnGoBack,
  ImageContainer,
  InfoContainer,
  LinksNavigate,
  ProductName,
  ProductDetail,
  ProductPrice,
  ProductComment,
  BtnContainer
};
