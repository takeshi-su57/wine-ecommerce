import type { NextPage } from 'next';
import Header from 'components/layout/Header';
import { Main, ProductsFlex, SectionCenter, SectionLoading, SectionProducts } from 'styles/Containers';
import Filter from 'components/Filter';
import CardProduct from 'components/CardProduct';
import { useContext, useState } from 'react';
import { AppContext } from 'contexts/AppProvider';
import LoadMore from 'styles/pages/store/LoadMoreBtn';
import Loading from 'components/Loading';

const Home: NextPage = () => {
  const { details, products, loadMore, loading } = useContext(AppContext);

  if (products.length === 0) {
    return (
      <Main>
      <Header />
      <SectionCenter>
        <SectionLoading>
          <Loading />
        </SectionLoading>
      </SectionCenter>
    </Main>
    )
  }

  return (
    <Main>
      <Header />
      <SectionCenter>
        <Filter />
        <SectionProducts>
          <p>
            <strong>{details.totalItems}</strong> produtos encontrados
          </p>
          <ProductsFlex>
            {
              products.map((product, index) => (
                <CardProduct
                  key={index}
                  name={product.name}
                  id={product.id}
                  image={product.image}
                  discount={product.discount}
                  price={product.price}
                  priceMember={product.priceMember}
                  priceNonMember={product.priceNonMember}
                />
              ))
            }
          </ProductsFlex>
          <div>
            <LoadMore onClick={ () => loadMore() } disabled={ products.length === details.totalItems }>
              { loading ? <Loading /> : <h3>Mostrar mais</h3> }
            </LoadMore>
          </div>
        </SectionProducts>
      </SectionCenter>
    </Main>
  );
};

export default Home;
