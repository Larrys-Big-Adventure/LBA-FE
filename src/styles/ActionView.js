import styled from 'styled-components';

const ListItem = styled.li`
  border: 1px solid black;
  width: 100%;
`;

const ActionViewContainer = styled.div`
  border: 2px solid black;
  margin: 10px;
  padding: 10px;
`;

const InputField = styled.input`
  border: 2px solid red;
  border-style: outset;
  margin-top: 7px;
  width: 100%;
  outline: none;
`;

const TextContainer = styled.div`
  border: 2px solid green;
  overflow: auto;
`;

export { ListItem, ActionViewContainer, InputField, TextContainer };
