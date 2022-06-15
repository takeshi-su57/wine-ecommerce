import styled from 'styled-components';
import { Props } from 'contexts/types';

const ContainerPagesBtns = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;

  button {
    &:last-child, &:first-child {
      background-color: transparent;
      color: #a82472;
      cursor: pointer;
      border: none;

      &:hover {
        background-color: transparent;
        border-color: transparent;
        color: #e43fa0;
      }

      &:disabled {
        cursor: auto;
        color: #ccc;
      }
    }
  }
`;

const BtnsPages = styled.button<Props>`
  background-color: ${(props) => props.actualPage ? '#a82472' : 'transparent'};;
  color: ${(props) => props.actualPage ? 'white' : '#a82472'};
  cursor: pointer;
  border: 2px solid #a82472;
  border-radius: 5px;
  font-size: 16px;
  padding: 8px 13px;
  margin-left: 10px;

  &:hover {
    background-color: #e43fa0;
    border-color: #e43fa0;
    color: white;
  }
`;

/* Mobile */
const LoadMore = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  margin-bottom: 40px;
  min-height: 50px;
  color: #b6116e;

  &:disabled {
    display: none;
  }
`;

export { LoadMore, ContainerPagesBtns, BtnsPages };
