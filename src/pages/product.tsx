import type { NextPage } from 'next';
import Head from 'next/head';
import BaseLayout from 'components/layout/Base';
import Header from 'components/layout/Header';
import { Main } from 'styles/Containers';

const Product: NextPage = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Wine E-commerce</title>
        <meta name="description" content="Application e-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header />
      </Main>
    </BaseLayout>
  );
};

export default Product;
