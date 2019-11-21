/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ModalItem from './ModalItem';

const Modal = ({ arr, title, bool }) => {
  return (
    <ModalContainer bool={bool}>
      <ModalContent>
        <h1>{title}</h1>
        {arr.length === 0 ? (
          <p>No {title.toLowerCase()} found</p>
        ) : (
          <ItemContainer>
            {arr.map((item, i) => (
              <ModalItem key={i} item={item} />
            ))}
          </ItemContainer>
        )}
      </ModalContent>
    </ModalContainer>
  );
};

Modal.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  bool: PropTypes.bool.isRequired
};

const ModalContent = styled.div`
  margin: 0 3% 5px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  top: 0;
  right: 3%;
  width: 100%;
  z-index: 10;
  height: 100%;
  overflow: auto;
  margin-top: 5px;
  max-width: 300px;
  max-height: 300px;
  margin-left: 30px;
  position: absolute;
  border: 2px solid black;
  background-color: white;
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  display: ${({ bool }) => (!bool ? 'none' : 'block')};

  @keyframes floating {
    from {
      transform: translate(0, 0px);
    }
    65% {
      transform: translate(0, 15px);
    }
    to {
      transform: translate(0, -0px);
    }
  }
`;

export default Modal;
