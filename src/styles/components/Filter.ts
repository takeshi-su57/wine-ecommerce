import { Props } from 'contexts/types';
import styled from 'styled-components';

const SectionFilter = styled.section<Props>`
  float: left;
  width: 25%;
  transition: 0.2s;

  h3 {
    padding: 20px;
  }

  h4 {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
  }

  @media(max-width: 1150px) {
    background-color: white;
    box-sizing: border-box;
    float: none;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    h4 {
      margin-top: 0;
    }
  }

  @media(max-width: 920px) {
    width: 70%;
  }

  @media(max-width: 800px) {
    width: 80%;
  }

  @media(max-width: 700px) {
    width: 90%;
  }

  @media(max-width: 630px) {
    width: 100%;
  }

  @media(max-width: 600px) {
    height: ${(props) => props.viewContainer ? '400px' : '60px'};
    overflow: hidden;
  }
`;

const FilterForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-left: 20px;
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
      opacity: 0;
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

    &:last-child {
      margin-bottom: 20px;
    }
  }
`;

export {
  SectionFilter,
  FilterForm
};
