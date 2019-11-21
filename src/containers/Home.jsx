import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axiosWithAuth from '../utils/axiosWithAuth';
import { Navigation, GameView, Controller, ActionView } from '../components';

const Home = () => {
  const [state, setState] = useState({
    id: null,
    name: '',
    loot: [],
    error: '',
    title: '',
    players: [],
    inventory: [],
    error_msg: '',
    description: ''
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
    } else if (e.key === 'u') {
      console.log(e.key);
    } else if (e.key === 'i') {
      console.log(e.key);
    } else if (e.key === 'p') {
      console.log(e.key);
    }
  };

  console.log(state.title);
  console.log(state.description);
  return (
    <HomeContainer>
      <Navigation />
      <GameView moveDirection={moveDirection} moveHandler={moveHandler} />
      <ActionView />
      <Controller moveDirection={moveDirection} moveHandler={moveHandler} />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
`;

export default Home;

// HOME PAGE TO DO
// import game view
// import controllers
