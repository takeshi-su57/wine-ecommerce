import { Props } from 'contexts/types';
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
  
  @media(max-width: 900px) {
    min-height: auto;
    width: 80%;
  }
`;

const InfoContainer = styled.section`
  width: 50%;

  @media(max-width: 900px) {
    text-align: center;
    width: 80%;
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
`;

const ProductName = styled.h1`
  font-size: 35px;
  margin: 15px 0;

  @media(max-width: 900px) {
    font-size: 4vh;
  }

  @media(max-width: 600px) {
    font-size: 2.8vh;
  }
`;

const ProductDetail = styled.div`
  color: #555555;
  display: flex;
  align-items: center;

  span {
    margin: 0 10px;
  }

  @media(max-width: 900px) {
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
  line-height: 1.5;
  font-size: 18px;
`;

const Description = styled.div`
  margin-top: 20px;
  margin-bottom: 150px;
  width: 100%;

  h4 {
    font-size: 2.8vh;
    margin-bottom: 20px;
  }
`;

const BtnContainer = styled.div<Props>`
  background-color: ${(props) => props.progress ? '#a82472' : '#7EBC43'};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  color: white;
  border-radius: 2px;
  font-size: 24px;
  padding: 15px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
  margin-bottom: 40px;
  min-height: 65px;
  box-sizing: border-box;
  transition: 0.5s;
  
  div {
    display: ${(props) => props.progress ? 'none' : 'flex'};

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

const ContainerPainelFloat = styled.div<Props>`
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.06);
  display: flex;

  div:nth-child(1) {
    width: 55%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;

    span:nth-child(1) {
      color: white;
      text-align: center;
      background-color: #F26649;
      border-radius: 2px;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
      padding: 2px 0;
      font-size: 14px;
      margin-top: -20px;
      width: 80px;
    }

    span:nth-child(2) {
      text-decoration: line-through;
      color: #666666;
      margin: 10px 0 2px 0;
    }

    span:nth-child(3) {
      color: #C81A78;
      font-size: 20px;

      span {
        background-color: transparent;
        box-shadow: none;
        color: #C81A78;
        font-size: 26px;
      }
    }

    span:nth-child(4) {
      color: #666666;
      font-size: 12px;
    }

    @media(min-width: 500px) {
      align-items: center;
    }
  }

  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    button {
      background-color: ${(props) => props.progress ? '#a82472' : '#7EBC43'};
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
      color: white;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
      border: none;
      padding: 15px 0;
      transition: 0.5s;
      width: 90%;
    }
  }
`;

const ErrorLoadProduct = styled.h1`
  color: #b3b3b3;
  margin-top: 40px;
  font-size: 30px;
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
  BtnContainer,
  Description,
  ContainerPainelFloat,
  ErrorLoadProduct,
};
