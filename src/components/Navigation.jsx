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

const Navigation = ({ history }) => {
  const logOut = () => {
    window.localStorage.clear();
    history.push('/');
  };

  return (
    <NavContainer>
      <Nav>
        <TitleDiv>
          <NavTitle>Larrys Leisurely Adventure</NavTitle>
        </TitleDiv>
        <NavButtonContainer>
          <NavButton onClick={logOut}>Log Out</NavButton>
        </NavButtonContainer>
      </Nav>
    </NavContainer>
  );
};

Navigation.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(Navigation);
