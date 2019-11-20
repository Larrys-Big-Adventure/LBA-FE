import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navigation = props => {
  const logOut = () => {
    window.localStorage.clear();
    props.history.push('/');
  };

  return (
    <nav>
      <div>
        <div>
          <h1>Title</h1>
        </div>
        <div>
          {localStorage.token ? (
            <button onClick={logOut}>Log Out</button>
          ) : (
            <NavLink className="decoration" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navigation);
