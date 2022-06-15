import styled from 'styled-components';

const BackContainer = styled.div`
  background-color: #0000005d;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 500px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  animation: viewUp;
  animation-duration: 0.2s;

  @media(max-width: 580px) {
    width: 100%;
  }

  @keyframes viewUp {
    from { right: -500px; }
  }
`;

const Header = styled.div`
  display: flex;
  padding: 20px;
  font-size: 22px;
  letter-spacing: 1px;
  box-sizing: border-box;
  width: 100%;
  height: 7%;
  
  span {
    display: flex;
    align-items: center;
    max-width: 200px;
    cursor: pointer;

    span {
      margin-left: 10px;
    }
  }
`;

const Body = styled.div`
  background-color: whitesmoke;
  box-sizing: border-box;
  height: 73%;
  overflow: auto;
  padding: 20px;
`;

const CardProduct = styled.div`
  background-color: white;
  float: right;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  min-height: 100px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.1);
  position: relative;

  div:nth-child(1) {
    width: 30%;
  }

  div:nth-child(2) {
    box-sizing: border-box;
    width: 60%;
    padding: 10px;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 16px;
    }

    div {
      margin-top: 20px;
      padding: 0;

      span:nth-child(1) {
        color: gray;
      }

      span:nth-child(2) {
        color: #b6116e;
        font-size: 20px;
        font-weight: 600;
      }
    }

    button {
      background-color: transparent;
      display: flex;
      border: none;
      cursor: pointer;
      font-size: 16px;
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
`;

const Footer = styled.div`
  background-color: white;
  box-sizing: border-box;
  height: 20%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 20px;
      font-weight: bold;
      color: #b6116e;
    }

    span:nth-child(2) {
      font-size: 25px;
    }
  }

  button {
    background-color: #7EBC43;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold;
    padding: 15px;
  }
`;

const NoProducts = styled.div`
  background-color: whitesmoke;
  color: grey;
  height: 93%;
  padding: 40px 0;
  text-align: center;
  font-size: 20px;
`;

export { BackContainer, Container, Header, Body, Footer, CardProduct, NoProducts };
