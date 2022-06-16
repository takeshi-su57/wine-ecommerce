import type { NextPage } from 'next';
import Header from 'components/Header';
import Filter from 'components/Filter';
import CardProduct from 'components/CardProduct';
import { useContext } from 'react';
import { AppContext } from 'contexts/AppProvider';
import Loading from 'components/Loading';
import WineBox from 'components/WineBox';
import { useMediaQuery } from 'hooks/useMediaQuery';
import {
  Main,
  ProductsFlex,
  SectionCenter,
  SectionError,
  SectionLoading,
  SectionProducts,
} from 'styles/Containers';
import LoadMoreMobile from 'components/LoadMoreMobile';
import PagesList from 'components/PagesList';

const Search: NextPage = () => {
  const {
    details,
    products,
    loading,
    viewCart,
    loadingData,
  } = useContext(AppContext);
  const inMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Main>
      <Header />
      <SectionCenter>
        <p data-cy="home_page_info_find_products">
          <strong>{ details.totalItems }</strong> produtos encontrados para &quot;Bacharola&quot;
        </p>
        
      </SectionCenter>

      { viewCart ? <WineBox /> : '' }
    </Main>
  );
};

export default Search;
