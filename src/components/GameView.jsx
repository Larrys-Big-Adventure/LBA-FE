import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Modal from './Modal';
import { View } from '../styles/GameView';

const GameView = ({
  moveHandler,
  loot,
  players,
  inventory,
  isInventoryModalOpen,
  isLootModalOpen,
  isPlayersModalOpen
}) => {
  return (
    <View onKeyPress={moveHandler} tabIndex="0">
      <Modal arr={loot} title="loot" bool={isLootModalOpen} />
      <Modal arr={players} title="players" bool={isPlayersModalOpen} />
      <Modal arr={inventory} title="inventory" bool={isInventoryModalOpen} />

      {/* giant border around taking up most of the screen */}
      <h1>Enjoy</h1>
    </View>
  );
};

GameView.propTypes = {
  moveHandler: PropTypes.func.isRequired
};

export default GameView;
