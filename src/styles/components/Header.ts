import { Props } from 'contexts/types';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: white;
  box-shadow: 0 1px 5px #ccc;
`;

const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1280px;

  @media(max-width: 1280px) {
    padding: 0 10px;
  }
`;

const Logo = styled.div`
  display: flex;
`;

const Navbar = styled.nav`
  ul {
    display: flex;
    padding: 0;
    list-style: none;
    height: 100%;
    margin: 0;

    li {
      padding: 0 20px;

      a {
        color: #666;
        font-size: 20px;
        font-weight: 400;
        text-decoration: none;
        display: flex;
        align-items: center;
        height: 100%;
        margin-top: -3px;
        padding: 0 5px;
        border-bottom: 3px solid transparent;

        &:hover {
          color: #b6116e;
          border-bottom: 3px solid #b6116e;
        }
      }
    }
  }

  @media(max-width: 1000px) {
    display: none;
  }
`;

const BtnsHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 30%;
  
  button {
    height: 100%;
    border: 0;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
  }

  button:nth-child(2) {
    margin: 0 10px;
    margin-right: 12px;
  }

  button:nth-child(3) {
    position: relative;

    div:nth-child(1) {
      background-color: orange;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      box-sizing: border-box;
      padding-top: 10px;
    }

    div:nth-child(2)  {
      background-color: #f5f5f5;
      color: #5cb79f;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }
  }

  @media(max-width: 1000px) {
    width: auto;
  }

  button:nth-child(2)  {
    @media(max-width:500px) {
      display: none;
    }
  }
`;

const BtnMenu = styled.button`
  display: none;

  @media(max-width: 1000px) {
    background-color: transparent;
    border: none;
    font-size: 30px;
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
`;

const SearchContainer = styled.div<Props>`
  background-color: whitesmoke;
  transition: 0.5s;
  height: ${Props => Props.viewContainer ? '80px' : '0'};
  overflow: hidden;
`;

const SearchContent = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1280px;
  padding: 20px;

  input {
    box-sizing: border-box;
    border: none;
    border-radius: 2px 0 0 2px;
    padding: 10px 20px;
    font-size: 20px;
    color: #333;
    width: 80%;

    &:focus {
      outline: none;
    }

    @media(max-width: 1024px) {
      width: 100%;
    }
  }

  label {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 15%;
    color: #666;

    @media(max-width: 1024px) {
      display: none;
    }
  }

  button {
    background-color: white;
    border: none;
    border-radius: 0 2px 2px 0;
    cursor: pointer;
    width: 5%;

    @media(max-width: 1024px) {
      width: 50px;
    }
  }
`;

const MenuContainer = styled.div`
  background-color: #0000005d;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Menu = styled.section`
  background-color: white;
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: viewUpMenu;
  animation-duration: 0.2s;

  button {
    background-color: transparent;
    border: none;
    position: absolute;
    right: 20px;
    font-size: 25px;
  }

  nav {
    margin-top: 20px;
    width: 100%;

    ul {
      padding: 0;

      li {
        margin-bottom: 20px;
        list-style: none;

        a {
          font-size: 24px;
          display: block; 
          padding: 10px 0;
          text-decoration: none;
          color: #666;
        }
      }
    }
  }

  @keyframes viewUpMenu {
    from { left: -300px; }
  }
`;

export {
  HeaderContent,
  HeaderContainer,
  Logo,
  Navbar,
  BtnsHeader,
  BtnMenu,
  SearchContainer,
  SearchContent,
  MenuContainer,
  Menu,
};
