import type { NextPage } from 'next';
import Header from 'components/layout/Header';
import { Main, SectionCenter } from 'styles/Containers';
import ProductInformation from 'components/ProductInformation';
import WineBox from 'components/WineBox';
import { useContext } from 'react';
import { AppContext } from 'contexts/AppProvider';

const Product: NextPage = () => {
  const { viewCart } = useContext(AppContext);

  return (
    <Main>
      <Header />
      <SectionCenter>
        <ProductInformation />
      </SectionCenter>
      
      { viewCart ? <WineBox /> : '' }
    </Main>
  );
};

export default Product;
