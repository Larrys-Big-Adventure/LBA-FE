import React, { Component } from 'react';
class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <h5>W-A-S-D</h5>
          </div>
          <div>
            <h5>I-G-P-Y</h5>
          </div>
          <div>
            <p> Instructions </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Controller;
