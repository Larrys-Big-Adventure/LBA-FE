import React from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';
import CurrentLocation from './CurrentLocation';
import { View } from '../styles/GameView';

const GameView = ({
  moveHandler,
  loot,
  players,
  inventory,
  isInventoryModalOpen,
  isLootModalOpen,
  isPlayersModalOpen,
  title,
  description
}) => {
  return (
    <View onKeyPress={moveHandler} tabIndex="0">
      <CurrentLocation title={title} description={description} />
      <div>
        <Modal arr={loot} title="Loot" bool={isLootModalOpen} />
        <Modal arr={players} title="Players" bool={isPlayersModalOpen} />
        <Modal arr={inventory} title="Inventory" bool={isInventoryModalOpen} />
      </div>

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
  isInventoryModalOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default GameView;
