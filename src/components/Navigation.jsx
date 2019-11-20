import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { NavContainer, NavButton, TitleDiv } from '../styles/Nav';

const Navigation = props => {
  const logOut = () => {
    window.localStorage.clear();
    props.history.push('/');
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

export default withRouter(Navigation);
