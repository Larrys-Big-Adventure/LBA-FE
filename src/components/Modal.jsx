import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Modal = ({ arr, title, bool }) => {
  return (
    <ModalContainer bool={bool}>
      {arr.length === 0 ? (
        <p>No {title} found</p>
      ) : (
        arr.map((item, i) => (
          <div key={i}>
            <p>{item}</p>
          </div>
        ))
      )}
    </ModalContainer>
  );
};

Modal.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired
};

const ModalContainer = styled.div`
  display: ${({ bool }) => (!bool ? 'none' : 'block')};
  padding: 80px 20px;
  max-height: 300px;
  max-width: 300px;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: white;
  z-index: 10;
  top: 0;
  right: 3%;
`;

export default Modal;
