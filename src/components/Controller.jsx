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

const Controller = ({
  moveDirection,
  moveHandler,
  setLootModalOpen,
  setInventoryModalOpen,
  setPlayersModalOpen
}) => {
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
          <Button type="button" onClick={setLootModalOpen}>
            L
          </Button>
          <Button type="button" onClick={setInventoryModalOpen}>
            I
          </Button>
          <Button type="button" onClick={setPlayersModalOpen}>
            P
          </Button>
        </HotKeyContainer>
      </Controllers>
    </ControllersContainer>
  );
};

Controller.propTypes = {
  moveDirection: PropTypes.func.isRequired,
  moveHandler: PropTypes.func.isRequired,
  setPlayersModalOpen: PropTypes.func.isRequired,
  setInventoryModalOpen: PropTypes.func.isRequired,
  setLootModalOpen: PropTypes.func.isRequired
};

export default Controller;
