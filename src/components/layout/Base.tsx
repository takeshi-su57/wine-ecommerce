import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

  html {
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: #F5F5F5;
    margin: 0;
    padding: 0;
  }

  * {
    margin: 0;
  }
`;

const BaseLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BaseLayout;
