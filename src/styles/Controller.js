import styled from 'styled-components';

const ControllersContainer = styled.div`
  width: 100%;
  outline: none;
`;
const WASDContainer = styled.div`
  width: 212px;
`;
const TopRow = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -18px;
`;
const BotRow = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Button = styled.button`
  cursor: pointer;
  outline: none;
  padding: 25px;
  border: 1px solid black;
  border-right: 15px solid black;
  border-bottom: 10px solid black;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;

  :active {
    transform: translateY(1px);
    filter: saturate(150%);
  }
  :hover {
    background-color: #a1a1a1;
  }
`;

const Controllers = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  justify-content: space-around;
`;

const HotKeyContainer = styled.div`
  button {
    margin: 0 0;
  }
`;

export {
  TopRow,
  BotRow,
  Button,
  Controllers,
  WASDContainer,
  HotKeyContainer,
  ControllersContainer
};
