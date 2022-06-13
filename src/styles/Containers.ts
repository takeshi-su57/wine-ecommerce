import styled from 'styled-components';

const Main = styled.main`
  margin: 0 auto;
`;

const SectionCenter = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 40px;

  @media(max-width: 1300px) {
    padding: 0 20px;
  }
`;

const SectionProducts = styled.section`
  float: right;
  width: 75%;

  @media(max-width: 1150px) {
    float: none;
    margin: 0 auto;
    width: 70%;
  }

  @media(max-width: 800px) {
    width: 100%;
  }
`;

const ProductsFlex = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &:last-child {
    margin-bottom: 100px;
  }
`;


export { Main, SectionCenter, SectionProducts, ProductsFlex };
