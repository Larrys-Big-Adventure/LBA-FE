import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const ControllersContainer = styled.div``;
const WASDContainer = styled.div``;
const TopRow = styled.div``;
const BotRow = styled.div``;
const Button = styled.button``;

Controller.propTypes = {
  moveDirection: PropTypes.func.isRequired
};

export default Controller;
