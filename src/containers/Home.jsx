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

  const setLootModalOpen = () => {
    setState({
      ...state,
      isInventoryModalOpen: false,
      isLootModalOpen: !state.isLootModalOpen,
      isPlayersModalOpen: false
    });
  };
  const setInventoryModalOpen = () => {
    setState({
      ...state,
      isInventoryModalOpen: !state.isInventoryModalOpen,
      isLootModalOpen: false,
      isPlayersModalOpen: false
    });
  };
  const setPlayersModalOpen = () => {
    setState({
      ...state,
      isInventoryModalOpen: false,
      isLootModalOpen: false,
      isPlayersModalOpen: !state.isPlayersModalOpen
    });
  };

  // keyboard controls
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
      setLootModalOpen();
    } else if (e.key === 'i') {
      setInventoryModalOpen();
    } else if (e.key === 'p') {
      setPlayersModalOpen();
    }
  };

  console.log(state.title);
  console.log(state.description);
  return (
    <HomeContainer>
      <Navigation />
      <GameView
        loot={state.loot}
        moveHandler={moveHandler}
        players={state.players}
        inventory={state.inventory}
        moveDirection={moveDirection}
        isLootModalOpen={state.isLootModalOpen}
        isPlayersModalOpen={state.isPlayersModalOpen}
        isInventoryModalOpen={state.isInventoryModalOpen}
        title={state.title}
        description={state.description}
      />
      <BottomSection>
        <ActionView />
        <Controller
          moveDirection={moveDirection}
          moveHandler={moveHandler}
          setLootModalOpen={setLootModalOpen}
          setInventoryModalOpen={setInventoryModalOpen}
          setPlayersModalOpen={setPlayersModalOpen}
        />
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
  margin-bottom: 50px;
`;

export default Home;

// HOME PAGE TO DO
// import game view
// import controllers
