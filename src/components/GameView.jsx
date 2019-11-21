import React from 'react';
import PropTypes from 'prop-types';

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
      <Modal arr={loot} title="Loot" bool={isLootModalOpen} />
      <Modal arr={players} title="Players" bool={isPlayersModalOpen} />
      <Modal arr={inventory} title="Inventory" bool={isInventoryModalOpen} />

      {/* giant border around taking up most of the screen */}
      <h1>Enjoy</h1>
    </View>
  );
};

GameView.propTypes = {
  moveHandler: PropTypes.func.isRequired,
  loot: PropTypes.arrayOf(PropTypes.string).isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  inventory: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLootModalOpen: PropTypes.bool.isRequired,
  isPlayersModalOpen: PropTypes.bool.isRequired,
  isInventoryModalOpen: PropTypes.bool.isRequired
};

export default GameView;
