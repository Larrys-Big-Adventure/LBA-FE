import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axiosWithAuth from '../utils/axiosWithAuth';
import { Navigation, GameView, Controller, ActionView } from '../components';

const Home = () => {
  const [state, setState] = useState({
    id: null,
    name: '',
    error: '',
    title: '',
    loot: [],
    players: [],
    inventory: [],
    error_msg: '',
    description: '',
    isInventoryModalOpen: false,
    isLootModalOpen: false,
    isPlayersModalOpen: false
  });

  // init
  useEffect(() => {
    axiosWithAuth()
      .get('api/adv/init/')
      .then(res => {
        setState({
          ...state,
          id: res.data.uuid,
          name: res.data.name,
          title: res.data.title,
          players: res.data.players,
          description: res.data.description
        });
      })
      .catch(() => {
        setState({
          ...state,
          error: ''
        });
      });
    // eslint-disable-next-line
  }, []);

  // move
  const moveDirection = direction => {
    axiosWithAuth()
      .post('api/adv/move/', { direction })
      .then(res => {
        setState({
          ...state,
          name: res.data.name,
          title: res.data.title,
          players: res.data.players,
          error_msg: res.data.error_msg,
          description: res.data.description
        });
      })
      .catch(() => {
        setState({
          ...state,
          error: ''
        });
      });
  };

  const moveHandler = e => {
    if (e.key === 'w') {
      moveDirection('n');
    } else if (e.key === 'a') {
      moveDirection('w');
    } else if (e.key === 's') {
      moveDirection('s');
    } else if (e.key === 'd') {
      moveDirection('e');
    } else if (e.key === 'l') {
      setState({
        ...state,
        isInventoryModalOpen: false,
        isLootModalOpen: !state.isLootModalOpen,
        isPlayersModalOpen: false
      });
    } else if (e.key === 'i') {
      setState({
        ...state,
        isInventoryModalOpen: !state.isInventoryModalOpen,
        isLootModalOpen: false,
        isPlayersModalOpen: false
      });
    } else if (e.key === 'p') {
      setState({
        ...state,
        isInventoryModalOpen: false,
        isLootModalOpen: false,
        isPlayersModalOpen: !state.isPlayersModalOpen
      });
    }
  };

  console.log(state.title);
  console.log(state.description);
  return (
    <HomeContainer>
      <Navigation />
      <GameView
        moveDirection={moveDirection}
        moveHandler={moveHandler}
        loot={state.loot}
        players={state.players}
        inventory={state.inventory}
        isInventoryModalOpen={state.isInventoryModalOpen}
        isLootModalOpen={state.isLootModalOpen}
        isPlayersModalOpen={state.isPlayersModalOpen}
      />
      <BottomSection>
        <ActionView />
        <Controller moveDirection={moveDirection} moveHandler={moveHandler} />
      </BottomSection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BottomSection = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  bottom: 0;
`;

export default Home;

// HOME PAGE TO DO
// import game view
// import controllers
