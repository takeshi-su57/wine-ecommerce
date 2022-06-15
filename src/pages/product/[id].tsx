import type { NextPage } from 'next';
import Header from 'components/Header';
import { Main, SectionCenter } from 'styles/Containers';
import DetailProduct from 'components/DetailProduct';
import WineBox from 'components/WineBox';
import { useContext } from 'react';
import { AppContext } from 'contexts/AppProvider';

const Product: NextPage = () => {
  const { viewCart } = useContext(AppContext);

  return (
    <Main>
      <Header />
      <SectionCenter>
        <DetailProduct />
      </SectionCenter>
      
      { viewCart ? <WineBox /> : '' }
    </Main>
  );
};

export default Product;
