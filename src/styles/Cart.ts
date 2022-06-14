import styled from 'styled-components';

const FloatContainer = styled.div`
  background-color: #0000005d;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
`;

const CartContainer = styled.div`
  background-color: white;
  width: 500px;
  float: right;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  overflow-y: auto;

  @media(max-width: 580px) {
    width: 100%;
  }
`;

const BtnCloseCart = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #b6116e;
  cursor: pointer;
  float: right;
  margin-bottom: 20px;
`;

const CardProductCart = styled.div`
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
    width: 65%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h3 {
      font-size: 16px;
    }

    h4 {
      color: gray;
    }

    h2 {
      color: #b6116e;
    }

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      font-size: 16px;
      position: absolute;
      top: 0;
      right: 0;
      margin: 10px;
    }
  }
`;

const BtnFinalized = styled.button`
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  right: 0;
  width: 100%;
  font-size: 16px;
  height: 40px;
  background-color: #b6116e;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

export { CartContainer, FloatContainer, BtnCloseCart, CardProductCart, BtnFinalized };
