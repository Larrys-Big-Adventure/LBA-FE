import React from 'react';
import PropTypes from 'prop-types';

import { View } from '../styles/GameView';

const GameView = ({ moveDirection }) => {
  const moveHandler = e => {
    let direction;
    if (e.key === 'w') {
      direction = 'n';
    } else if (e.key === 'a') {
      direction = 'w';
    } else if (e.key === 's') {
      direction = 's';
    } else if (e.key === 'd') {
      direction = 'e';
    }
    moveDirection(direction);
  };

  return (
    <View onKeyPress={moveHandler} tabIndex="0">
      {/* giant border around taking up most of the screen */}
      <h1>Enjoy</h1>
    </View>
  );
};

GameView.propTypes = {
  moveDirection: PropTypes.func.isRequired
};

export default GameView;
