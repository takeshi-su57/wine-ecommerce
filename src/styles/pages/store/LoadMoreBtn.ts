import styled from 'styled-components';

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

export default LoadMore;
