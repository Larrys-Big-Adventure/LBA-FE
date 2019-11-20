import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-conent: space-evenly
  width: 100%;
  border: 2px solid black;
  border-radius: 3px;
  margin-top: 5px;
  align-items:
`;

const NavButton = styled.button`
  padding: 15px;
  margin-top: 10px;
  width: 50
  cursor: pointer;
  border: 2px solid black;
`;

const TitleDiv = styled.div`
  //   border: 2px solid black;
  margin-left: 25px;
  width: 92%;
`;

export { NavContainer, NavButton, TitleDiv };
