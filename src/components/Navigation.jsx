import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logOut = () => {
    window.localStorage.clear();
    this.props.history.push('/');
  };
  render() {
    return (
      <nav>
        <div>
          <div>
            <h1>Title</h1>
          </div>
          <div>
            {localStorage.token ? (
              <button>Log Out</button>
            ) : (
              <NavLink className="decoration" to="/login">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
