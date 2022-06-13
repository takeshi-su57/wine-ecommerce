import styled from 'styled-components';

const SectionFilter = styled.section`
  float: left;
  width: 25%;

  h4 {
    margin-top: 40px;
    margin-bottom: 20px;
  }

  @media(max-width: 1150px) {
    display: none;
  }
`;

const FilterForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 30px;
    position: relative;
    cursor: pointer;
    padding-top: 2px;

    span {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #dfdfdf;
      border-radius: 50%;

      &:after {
        content: "";
        position: absolute;
        display: none;
        top: 9px;
        left: 9px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: white;
      }
    }

    input {
      cursor: pointer;
      margin-right: 20px;

      &:checked ~ span {
        background-color: #b6116e;

        &:after {
          display: block;
        }
      }
    }

    &:hover span {
      background-color: #ccc;
    }
  }
`;

export {
  SectionFilter,
  FilterForm
};
