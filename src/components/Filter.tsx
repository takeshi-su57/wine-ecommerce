import { AppContext } from 'contexts/AppProvider';
import { useContext, useState } from 'react';
import { FilterForm, SectionFilter } from 'styles/components/Filter';

const Filter = () => {
  const { getByFilter, getInitInfo } = useContext(AppContext);
  const [allProducts, setNoFilter] = useState(true);

  const getFilter = async (filter: string) => {
    setNoFilter(false);
    getByFilter(filter);
  };

  const getNoFilter = async (filter: string) => {
    setNoFilter(true);
    getInitInfo();
  };

  return (
    <SectionFilter>
      <h3>Refine sua busca</h3>

      <h4>Por preço</h4>

      <FilterForm>
        <label htmlFor="price-option-default">
          <input
            type="radio"
            name="filter"
            id="price-option-default"
            onChange={ () => getNoFilter('0-40')}
            checked={ allProducts }
          />
          <span></span>
          Todos os preços
        </label>

        <label htmlFor="price-option-one">
          <input
            type="radio"
            name="filter"
            id="price-option-one"
            onChange={ () => getFilter('0-40')}
          />
          <span></span>
          Até R$40
        </label>

        <label htmlFor="price-option-two">
          <input
            type="radio"
            name="filter"
            id="price-option-two"
            onChange={ () => getFilter('40-60') }
          />
          <span></span>
          R$40 A R$60
        </label>

        <label htmlFor="price-option-three">
          <input
            type="radio"
            name="filter"
            id="price-option-three"
            onChange={ () => getFilter('100-200') }
          />
          <span></span>
          R$100 A R$200
        </label>

        <label htmlFor="price-option-four">
          <input
            type="radio"
            name="filter"
            id="price-option-four"
            onChange={ () => getFilter('200-500') }
          />
          <span></span>
          R$200 A R$500
        </label>

        <label htmlFor="price-option-five">
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
