import styled from 'styled-components';

const ListItem = styled.li`
  /* border: 0.02px solid black; */
  width: 100%;
  font-size: 14px;
  font-family: monospace;
  list-style-type: none;
  font-weight: bold;
`;

const ActionViewContainer = styled.div`
  border: 2px solid black;
  margin: 10px;
  padding: 10px;
`;

const InputField = styled.input`
  border: 2px solid red;
  border-style: outset;
  //margin-top: 7px;
  width: 95%;
  outline: none;
  padding-top: 17px;
  padding-bottom: 10px;
  font-weight: bold;
  font-family: monospace;
`;

const TextContainer = styled.div`
  border: 2px solid black;
  overflow: auto;
  height: 70px;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
`;

const SendButton = styled.button`
  border: 2px solid black;
  width: 5%;
`;

const UserInputContainer = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export {
  ListItem,
  ActionViewContainer,
  InputField,
  TextContainer,
  SendButton,
  UserInputContainer,
  Form
};
