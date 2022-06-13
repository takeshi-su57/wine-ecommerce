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

  @media(max-width: 1000px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  min-height: 500px;

  @media(max-width: 1000px) {
    width: 400px;
    min-height: 400px;
    margin: 0 auto;
    margin-top: 20px;
  }

  @media(max-width: 700px) {
    width: 100%;
  }
`;

const InfoContainer = styled.section`
  width: 50%;

  @media(max-width: 1000px) {
    width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  @media(max-width: 700px) {
    width: 100%;
  }
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

  @media(max-width: 1000px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const ProductName = styled.h1`
  font-size: 35px;
  margin: 15px 0;

  @media(max-width: 1000px) {
    text-align: center;
  }
`;

const ProductDetail = styled.div`
  color: #555555;
  display: flex;

  span {
    margin: 0 10px;
  }

  @media(max-width: 1000px) {
    justify-content: center;
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

  @media(max-width: 1000px) {
    margin-top: 20px;
  }
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

  @media(max-width: 1000px) {
    margin: 0 auto;
    margin-bottom: 30px;
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
