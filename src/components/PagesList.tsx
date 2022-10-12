import { useContext } from 'react';
import { AppContext } from 'contexts/AppProvider';
import { BtnsPages, ContainerPagesBtns } from 'styles/components/LoadMoreBtn';

const PagesList = () => {
  const { details, loadMoreForPage } = useContext(AppContext);

  return (
    <ContainerPagesBtns>
      <button
        onClick={ () => loadMoreForPage(details.page - 1) }
        disabled={ details.page === 1 }
        data-cy="home_page_navigate_btn-previous"
      >
        &lt;&lt; Previous
      </button>

      {
        details.pagination.map((page, index) => (
          <BtnsPages
            key={ index }
            onClick={ () => loadMoreForPage(page)}
            actualPage={ page === details.page ? true : false }
            data-cy={ `home_page_navigate_btn-${index}` }
          >
            {page}
          </BtnsPages>
        ))
      }

      <button
        onClick={ () => loadMoreForPage(details.page + 1) }
        disabled={ (details.page + 1) > details.totalPages }
        data-cy="home_page_navigate_btn-next"
      >
        Next &gt;&gt;
      </button>
    </ContainerPagesBtns>
  );
};

export default PagesList;
