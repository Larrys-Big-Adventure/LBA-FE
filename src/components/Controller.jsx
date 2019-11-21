import React from 'react';
import PropTypes from 'prop-types';
import {
  ControllersContainer,
  WASDContainer,
  TopRow,
  BotRow,
  Button,
  Controllers,
  HotKeyContainer
} from '../styles/Controller';
import Instructions from './Instructions';

const Controller = ({ moveDirection, moveHandler }) => {
  return (
    <ControllersContainer onKeyPress={moveHandler} tabIndex="0">
      <Controllers>
        <WASDContainer>
          <TopRow>
            <Button type="button" onClick={() => moveDirection('n')}>
              W
            </Button>
          </TopRow>
          <BotRow>
            <Button type="button" onClick={() => moveDirection('w')}>
              A
            </Button>
            <Button type="button" onClick={() => moveDirection('s')}>
              S
            </Button>
            <Button type="button" onClick={() => moveDirection('e')}>
              D
            </Button>
          </BotRow>
        </WASDContainer>
        <Instructions />
        <HotKeyContainer>
          <Button type="button">L</Button>
          <Button type="button">I</Button>
          <Button type="button">P</Button>
        </HotKeyContainer>
      </Controllers>
    </ControllersContainer>
  );
};

Controller.propTypes = {
  moveDirection: PropTypes.func.isRequired,
  moveHandler: PropTypes.func.isRequired
};

export default Controller;
