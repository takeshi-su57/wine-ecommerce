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
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 100px;
  }
`;

const SectionFlexProduct = styled.section`
  display: flex;
  margin-top: 20px;
  position: relative;

  @media(max-width: 1000px) {
    flex-direction: column;
  }
`;

const SectionLoading = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;

export {
  Main,
  SectionCenter,
  SectionProducts,
  ProductsFlex,
  SectionFlexProduct,
  SectionLoading
};
