import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Neo Sans';
    src: url('fonts/Neo-Sans-Std-Regular.otf');
  }

  @font-face {
    font-family: 'Neo Sans 2';
    src: url('fonts/Neo-Sans-Std-Light.otf');
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: 'Neo Sans';
    margin: 0;
    padding: 0;
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
