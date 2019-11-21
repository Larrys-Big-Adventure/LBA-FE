import React from 'react';
import PropTypes from 'prop-types';

import { View } from '../styles/GameView';

const GameView = ({ moveHandler }) => {
  return (
    <View onKeyPress={moveHandler} tabIndex="0">
      {/* giant border around taking up most of the screen */}
      <h1>Enjoy</h1>
    </View>
  );
};

GameView.propTypes = {
  moveHandler: PropTypes.func.isRequired
};

export default GameView;
