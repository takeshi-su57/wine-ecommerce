import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: white;
  box-shadow: 0 1px 5px #ccc;
`;

const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1280px;
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
`;

const BtnsHeader = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
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
`;

export { HeaderContent, HeaderContainer, Navbar, BtnsHeader };
