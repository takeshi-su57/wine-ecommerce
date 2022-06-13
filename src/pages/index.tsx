import type { NextPage } from 'next';
import Head from 'next/head';
import BaseLayout from 'components/layout/Base';
import Header from 'components/layout/Header';
// Styles Components:
import { Main, ProductsFlex, SectionCenter, SectionProducts } from 'styles/Containers';
import Filter from 'components/Filter';
import CardProduct from 'components/CardProduct';

const Home: NextPage = () => {
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
            <p><strong>10</strong> produtos encontrados</p>
            <ProductsFlex>
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </ProductsFlex>
          </SectionProducts>
        </SectionCenter>
      </Main>
    </BaseLayout>
  );
};

export default Home;
