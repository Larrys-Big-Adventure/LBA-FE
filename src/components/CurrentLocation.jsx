import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CurrentLocation = ({ title, description, world, room }) => {
  const currentNode = world.find(item => item.id === room.id);

  console.log(currentNode);
  return (
    <Container>
      <Header>{title}</Header>
      <p>{description}</p>
      {currentNode && (
        <>
          <p>
            Available directions:
            <StyledSpan>{currentNode.n_to !== 0 ? ' north' : ''}</StyledSpan>
            <StyledSpan>{currentNode.s_to !== 0 ? ' south' : ''}</StyledSpan>
            <StyledSpan>{currentNode.e_to !== 0 ? ' east' : ''}</StyledSpan>
            <StyledSpan>{currentNode.w_to !== 0 ? ' west' : ''}</StyledSpan>
          </p>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border: 2px solid black;
  border-top-color: white;
  position: absolute;
  padding: 10px 30px;
  top: 0;
  z-index: 99;
  width: 40%;
`;

const Header = styled.h2`
  font-family: monospace;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-family: monospace;
`;

const StyledSpan = styled.span`
  font-size: 3rem;
`;

CurrentLocation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default CurrentLocation;
