import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

import { NavContainer, NavButton, TitleDiv } from '../styles/Nav';

const Navigation = ({ history }) => {

  const logOut = () => {
    window.localStorage.clear();
    history.push('/');
  };

  return (
    <NavContainer>
      <TitleDiv>
        <h1>LLA</h1>
      </TitleDiv>
      <div>
        {localStorage.token ? (
          <NavButton onClick={logOut}>Log Out</NavButton>
        ) : (
          <NavLink className="decoration" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </NavContainer>
  );
};


Navigation.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(Navigation);
