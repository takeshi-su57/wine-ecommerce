import type { NextPage } from 'next';
import Header from 'components/Header';
import { Main, ProductsFlex, SectionCenter, SectionError, SectionLoading, SectionProducts } from 'styles/Containers';
import Filter from 'components/Filter';
import CardProduct from 'components/CardProduct';
import { useContext } from 'react';
import { AppContext } from 'contexts/AppProvider';
import { LoadMore, ContainerPagesBtns, BtnsPages } from 'styles/components/LoadMoreBtn';
import Loading from 'components/Loading';
import WineBox from 'components/WineBox';
import { useMediaQuery } from 'hooks/useMediaQuery';

const Home: NextPage = () => {
  const { details, products, loadMore, loading, viewCart, loadMoreForPage, loadingData } = useContext(AppContext);
  const inMobile = useMediaQuery('(max-width: 600px)');

  if (loading && !inMobile || loadingData) {
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
    );
  };

  /* Caso a requisição não retorne nenhum produto */
  if (products.length === 0) {
    return (
      <Main>
        <Header />
        <SectionCenter>
          <Filter />
          <SectionError>
            <h1>Nenhum produto foi encontrado!</h1>
          </SectionError>
        </SectionCenter>
      </Main>
    );
  };

  /* Caso a requisição retorne os dados esperados */
  return (
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

          {
            inMobile ? (
              <div>
                <LoadMore onClick={ () => loadMore() } disabled={ products.length === details.totalItems }>
                  { loading ? <Loading /> : <h3>Mostrar mais</h3> }
                </LoadMore>
              </div>
            ) : (
              <ContainerPagesBtns>
                <button
                  onClick={ () => loadMoreForPage(details.page - 1) }
                  disabled={ details.page === 1 }
                  data-cy="home_page_navigate_btn-previous"
                >
                  &lt;&lt; Anterior
                </button>

                {
                  details.pagination.map((page, index) => (
                    <BtnsPages
                      key={ index }
                      onClick={ () => loadMoreForPage(page) }
                      actualPage={ page === details.page ? true : false }
                      data-cy={`home_page_navigate_btn-${index}`}
                    >
                      { page }
                    </BtnsPages>
                  ))
                }
                
                <button
                  onClick={ () => loadMoreForPage(details.page + 1) }
                  disabled={ (details.page + 1) > details.totalPages }
                  data-cy="home_page_navigate_btn-next"
                >
                  Próximo &gt;&gt;
                </button>
              </ContainerPagesBtns>
            )
          }
        </SectionProducts>
      </SectionCenter>

      { viewCart ? <WineBox /> : '' }
    </Main>
  );
};

export default Home;
