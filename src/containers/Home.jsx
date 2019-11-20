import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';
import { Navigation, GameView, Controller, ActionView } from '../components';

const Home = () => {
  const [state, setState] = useState({
    id: null,
    name: '',
    title: '',
    description: '',
    players: [],
    error_msg: '',
    error: ''
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
          description: res.data.description,
          players: res.data.players
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
          description: res.data.description,
          players: res.data.players,
          error_msg: res.data.error_msg
        });
      })
      .catch(() => {
        setState({
          ...state,
          error: ''
        });
      });
  };

  console.log(state.title);
  console.log(state.description);
  return (
    <div>
      <Navigation />
      <GameView />
      <ActionView />
      <Controller moveDirection={moveDirection} />
    </div>
  );
};

export default Home;

// HOME PAGE TO DO
// import game view
// import controllers
