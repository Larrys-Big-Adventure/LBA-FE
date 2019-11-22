import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CurrentLocation = ({ title, description }) => {
  return (
    <Container>
      <Header>{title}</Header>
      <Paragraph>{description}</Paragraph>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border: 2px solid black;
  border-top-color: white;
  position: absolute;
  text-align: center;
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

CurrentLocation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default CurrentLocation;
