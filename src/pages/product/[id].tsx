import type { NextPage } from 'next';
import Header from 'components/layout/Header';
import { Main, SectionCenter } from 'styles/Containers';
import ProductInformation from 'components/ProductInformation';
import { BtnGoBack } from 'styles/pages/product/Informations';
import Router from 'next/router';
import WineBox from 'components/WineBox';
import { useContext } from 'react';
import { AppContext } from 'contexts/AppProvider';
import { ArrowBack } from 'components/icons';

const Product: NextPage = () => {
  const { viewCart } = useContext(AppContext);

  return (
    <Main>
      <Header />
      <SectionCenter>
        <BtnGoBack onClick={ () => Router.push('/') }>
          <ArrowBack />
          Voltar
        </BtnGoBack>

        <ProductInformation />
      </SectionCenter>
      
      { viewCart ? <WineBox /> : '' }
    </Main>
  );
};

export default Product;
