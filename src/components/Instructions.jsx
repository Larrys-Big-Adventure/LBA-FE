import React from 'react';
import styled from 'styled-components';

const Instructions = () => (
  <Container>
    <Header>instructions</Header>
    <ContentContainer>
      <div>
        <p>W: North</p>
        <p>A: West</p>
        <p>S: South</p>
        <p>D: East</p>
      </div>
      <div>
        <p>/say:</p>
        <p>drop Item</p>
        <p>take Item</p>
      </div>
      <div>
        <p>L: Room Loot</p>
        <p>I: Inventory</p>
        <p>P: Player List</p>
      </div>
    </ContentContainer>
  </Container>
);

const Container = styled.div`
  border: 2px solid black;
  /* padding: 50px 100px; */
  height: 100%;
  width: 500px;
  padding: 20px;
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  font-family: monospace;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Header = styled.h2``;

export default Instructions;
