import type { NextPage } from 'next';
import Head from 'next/head';
import BaseLayout from 'components/layout/Base';
import Header from 'components/layout/Header';
// Styles Components:
import { Main, ProductsFlex, SectionCenter, SectionProducts } from 'styles/Containers';
import Filter from 'components/Filter';
import CardProduct from 'components/CardProduct';
import { useContext } from 'react';
import { AppContext } from 'contexts/AppProvider';

const Home: NextPage = () => {
  const { details, products } = useContext(AppContext);

  return (
    <BaseLayout>
      <Head>
        <title>Wine E-commerce</title>
        <meta name="description" content="Application e-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header />
        <SectionCenter>
          <Filter />
          <SectionProducts>
            <p>
              <strong>{ details.totalItems }</strong> produtos encontrados
            </p>
            <ProductsFlex>
              {
                products.map((product, index) => (
                  <CardProduct
                    key={ index }
                    name={ product.name }
                    id={ product.id }
                    image={ product.image }
                    discount={ product.discount }
                    price={ product.price }
                    priceMember={ product.priceMember }
                    priceNonMember={ product.priceNonMember }
                  />
                ))
              }
            </ProductsFlex>
          </SectionProducts>
        </SectionCenter>
      </Main>
    </BaseLayout>
  );
};

export default Home;
