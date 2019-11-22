import React from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';
import CurrentLocation from './CurrentLocation';
import { View } from '../styles/GameView';
import WorldView from './WorldView';

const GameView = ({
  moveHandler,
  loot,
  world,
  room,
  memoCount,
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
      <CurrentLocation
        title={title}
        description={description}
        world={world}
        room={room}
      />
      <div>
        <Modal arr={loot} title="Loot" bool={isLootModalOpen} />
        <Modal arr={players} title="Players" bool={isPlayersModalOpen} />
        <Modal arr={inventory} title="Inventory" bool={isInventoryModalOpen} />
      </div>
      <WorldView world={world} room={room} memoCount={memoCount} />
    </View>
  );
};

GameView.defaultProps = {
  world: [
    {
      description: 'SDsaDasd',
      e_to: null,
      n_to: null,
      w_to: null,
      s_to: null,
      id: null,
      title: '',
      y: null,
      x: null
    }
  ],
  room: {
    id: null,
    title: '',
    description: ''
  }
};

GameView.propTypes = {
  world: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      e_to: PropTypes.number,
      n_to: PropTypes.number,
      w_to: PropTypes.number,
      s_to: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      y: PropTypes.number,
      x: PropTypes.number
    })
  ),
  memoCount: PropTypes.number.isRequired,
  room: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string
  }),
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
