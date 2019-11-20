import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

const Navigation = ({ history }) => {
  const logOut = () => {
    window.localStorage.clear();
    history.push('/');
  };

  return (
    <NavContainer>
      <Nav>
        <NavTop>
          <NavTitle>Title</NavTitle>
        </NavTop>
        <NavBot>
          {localStorage.token ? (
            <NavButton type="button" onClick={logOut}>
              Log Out
            </NavButton>
          ) : (
            <NavLink className="decoration" to="/login">
              Login
            </NavLink>
          )}
        </NavBot>
      </Nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  border-bottom: 1px solid black;
  padding: 10px 0;
`;

const Nav = styled.nav`
  display: flex;
  margin-left: 3%;
  margin-right: 3%;
  justify-content: space-between;
  align-items: baseline;
`;

const NavTitle = styled.h1``;

const NavTop = styled.div``;

const NavBot = styled.div``;

const NavButton = styled.button``;

Navigation.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(Navigation);
