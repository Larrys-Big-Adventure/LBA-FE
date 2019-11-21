import styled from 'styled-components';

const View = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: black;
  height: auto;
  border: 3px solid red;
  min-height: calc(100% - 360px);
`;

// eslint-disable-next-line import/prefer-default-export
export { View };
