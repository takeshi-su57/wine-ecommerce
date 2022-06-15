import type { NextPage } from 'next';
import Header from 'components/layout/Header';
import { Main, ProductsFlex, SectionCenter, SectionLoading, SectionProducts } from 'styles/Containers';
import Filter from 'components/Filter';
import CardProduct from 'components/CardProduct';
import { useContext } from 'react';
import { AppContext } from 'contexts/AppProvider';
import { LoadMore, ContainerPagesBtns, BtnsPages } from 'styles/pages/store/LoadMoreBtn';
import Loading from 'components/Loading';
import WineBox from 'components/WineBox';

const Home: NextPage = () => {
  const { details, products, loadMore, loading, viewCart, loadMoreForPage } = useContext(AppContext);

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

  if (loading) {
    return (
      <Main>
      <Header />
      <SectionCenter>
        <Filter />
        <SectionLoading>
          <Loading />
        </SectionLoading>
      </SectionCenter>
    </Main>
    )
  }

  return (
    <Main style={{ overflow: 'hidden' }}>
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

          <ContainerPagesBtns>
            <button
              onClick={ () => loadMoreForPage(details.page - 1) }
              disabled={ details.page === 1 }>
              &lt;&lt; Anterior
            </button>

            {
              details.pagination.map((page, index) => (
                <BtnsPages
                  key={ index }
                  onClick={ () => loadMoreForPage(page) }
                  actualPage={ page === details.page ? true : false }
                >
                  { page }
                </BtnsPages>
              ))
            }
            
            <button
              onClick={ () => loadMoreForPage(details.page + 1) }
              disabled={ (details.page + 1) > details.totalPages }
            >
              Próximo &gt;&gt;
            </button>
          </ContainerPagesBtns>

          

          {/* <div>
            <LoadMore onClick={ () => loadMore() } disabled={ products.length === details.totalItems }>
              { loading ? <Loading /> : <h3>Mostrar mais</h3> }
            </LoadMore>
          </div> */}
        </SectionProducts>
      </SectionCenter>

      { viewCart ? <WineBox /> : '' }
    </Main>
  );
};

export default Home;
