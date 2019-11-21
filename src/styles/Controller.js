import styled from 'styled-components';

const ControllersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
`;

const HotKeyContainer = styled.div`
  button {
    margin: 0 10px;
  }
`;

export {
  TopRow,
  BotRow,
  Button,
  WASDContainer,
  HotKeyContainer,
  ControllersContainer
};
