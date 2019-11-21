import styled from 'styled-components';

const ListItem = styled.li`
  border: 0.02px solid black;
  width: 100%;
  font-size: 14px;
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
  height: 70px;
`;

export { ListItem, ActionViewContainer, InputField, TextContainer };
