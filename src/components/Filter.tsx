import { FilterForm, SectionFilter } from 'styles/components/Filter';

const Filter = () => {
  return (
    <SectionFilter>
      <h3>Refine sua busca</h3>

      <h4>Por preço</h4>

      <FilterForm>
        <label htmlFor="price-option-one">
          <input type="radio" name="filter" id="price-option-one" />
          <span></span>
          Até R$40
        </label>

        <label htmlFor="price-option-two">
          <input type="radio" name="filter" id="price-option-two" />
          <span></span>
          R$40 A R$60
        </label>

        <label htmlFor="price-option-three">
          <input type="radio" name="filter" id="price-option-three" />
          <span></span>
          R$100 A R$200
        </label>

        <label htmlFor="price-option-four">
          <input type="radio" name="filter" id="price-option-four" />
          <span></span>
          R$200 A R$500
        </label>

        <label htmlFor="price-option-five">
          <input type="radio" name="filter" id="price-option-five" />
          <span></span>
          Acima de R$500
        </label>
      </FilterForm>
    </SectionFilter>
  );
};

export default Filter;
