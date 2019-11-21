import styled from 'styled-components';

const ControllersContainer = styled.div`
  margin: 0 3%;
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

export { ControllersContainer, WASDContainer, TopRow, BotRow, Button };
