import type { NextPage } from 'next';
import Head from 'next/head';
import BaseLayout from 'components/layout/Base';
import Header from 'components/layout/Header';
// Styles Components:
import Container from 'styles/layout';

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Wine E-commerce</title>
        <meta name="description" content="Application e-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container.Main>
        <Header />
      </Container.Main>
    </BaseLayout>
  )
}

export default Home
