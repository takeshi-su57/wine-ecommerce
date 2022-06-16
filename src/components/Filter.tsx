import { AppContext } from 'contexts/AppProvider';
import { useMediaQuery } from 'hooks/useMediaQuery';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { FilterForm, SectionFilter } from 'styles/components/Filter';

const Filter = () => {
  const { getProductsFromApi, getInitInfo } = useContext(AppContext);
  const [allProducts, setNoFilter] = useState(true);
  const [viewFilter, setView] = useState(false);
  const inMobile = useMediaQuery('(max-width: 600px)');

  const getFilter = async (filter: string) => {
    setNoFilter(false);
    getProductsFromApi(1, filter, '');
  };

  const getNoFilter = async () => {
    setNoFilter(true);
    getProductsFromApi();
  };

  const viewFilterToggle = () => {
    if (viewFilter) {
      setView(false);
    } else {
      setView(true);
    }
  };

  return (
    <SectionFilter viewContainer={ viewFilter ? true : false }>
      <h3 onClick={ inMobile ? viewFilterToggle : undefined }>
        Refine sua busca
        <Image
          src="/icons/arrow.svg"
          alt="Product Preview"
          width={20}
          height={20}
        />
      </h3>

      <h4>Por preço</h4>

      <FilterForm>
        <label htmlFor="price-option-default" data-cy="filter-radio-default">
          <input
            type="radio"
            name="filter"
            id="price-option-default"
            onChange={ () => getNoFilter()}
            checked={ allProducts }
          />
          <span></span>
          Todos os preços
        </label>

        <label htmlFor="price-option-one" data-cy="filter-radio-1">
          <input
            type="radio"
            name="filter"
            id="price-option-one"
            onChange={ () => getFilter('0-40')}
          />
          <span></span>
          Até R$40
        </label>

        <label htmlFor="price-option-two" data-cy="filter-radio-2">
          <input
            type="radio"
            name="filter"
            id="price-option-two"
            onChange={ () => getFilter('40-60') }
          />
          <span></span>
          R$40 A R$60
        </label>

        <label htmlFor="price-option-three" data-cy="filter-radio-3">
          <input
            type="radio"
            name="filter"
            id="price-option-three"
            onChange={ () => getFilter('100-200') }
          />
          <span></span>
          R$100 A R$200
        </label>

        <label htmlFor="price-option-four" data-cy="filter-radio-4">
          <input
            type="radio"
            name="filter"
            id="price-option-four"
            onChange={ () => getFilter('200-500') }
          />
          <span></span>
          R$200 A R$500
        </label>

        <label htmlFor="price-option-five" data-cy="filter-radio-5">
          <input
            type="radio"
            name="filter"
            id="price-option-five"
            onChange={ () => getFilter('500-') }
          />
          <span></span>
          Acima de R$500
        </label>
      </FilterForm>
    </SectionFilter>
  );
};

export default Filter;
