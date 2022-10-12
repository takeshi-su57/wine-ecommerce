import { useContext } from 'react';
import { LoadMore } from 'styles/components/LoadMoreBtn';
import { AppContext } from 'contexts/AppProvider';
import Loading from 'components/Loading';

const LoadMoreMobile = () => {
  const { products, details, loadMore, loading } = useContext(AppContext);

  return (
    <div>
      <LoadMore
        onClick={() => loadMore()}
        disabled={products.length === details.totalItems}
      >
        {loading ? <Loading /> : <h3>Show more</h3>}
      </LoadMore>
    </div>
  );
};

export default LoadMoreMobile;
