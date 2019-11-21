import React from 'react';
import PropTypes from 'prop-types';
import {
  ControllersContainer,
  WASDContainer,
  TopRow,
  BotRow,
  Button
} from '../styles/Controller';

const Controller = ({ moveDirection }) => {
  return (
    <ControllersContainer>
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
    </ControllersContainer>
  );
};

Controller.propTypes = {
  moveDirection: PropTypes.func.isRequired
};

export default Controller;
