import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
  Nav,
  NavTitle,
  TitleDiv,
  NavButton,
  NavContainer,
  NavButtonContainer
} from '../styles/Nav';

import {
  Container,
  Button,
  Icon,
  Sprite,
  ControllerIcon,
  Table,
  List,
  TextArea,
  TextInput
} from 'nes-react';

const Navigation = ({ history }) => {
  const logOut = () => {
    window.localStorage.clear();
    history.push('/');
  };

  return (
    <NavContainer>
      <link
        href="https://fonts.googleapis.com/css?family=Press+Start+2P"
        rel="stylesheet"
      />
      <Container>
        <Nav>
          <TitleDiv>
            <NavTitle>Larrys Leisurely Adventure</NavTitle>
          </TitleDiv>
          <NavButtonContainer>
            <Button warning onClick={logOut}>
              Log Out
            </Button>
          </NavButtonContainer>
        </Nav>
      </Container>
    </NavContainer>
  );
};

Navigation.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(Navigation);
