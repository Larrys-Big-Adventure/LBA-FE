/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Graph } from 'react-d3-graph';

const WorldView = ({ world, room }) => {
  console.log(world[0]);
  console.log(world);
  const nodes = world.map(item => ({
    id: item.id,
    x: item.x,
    y: item.y,
    title: item.title,
    size: item.id === room.id ? 700 : 500,
    color: item.id === room.id ? 'red' : 'lightblue',
    symbolType: item.id === room.id ? 'diamond' : 'circle'
  }));
  const links = [];
  world.forEach(item => {
    if (item.n_to !== 0) {
      links.push({ source: item.id, target: item.n_to });
    }
    if (item.s_to !== 0) {
      links.push({ source: item.id, target: item.s_to });
    }
    if (item.w_to !== 0) {
      links.push({ source: item.id, target: item.w_to });
    }
    if (item.e_to !== 0) {
      links.push({ source: item.id, target: item.e_to });
    }
  });

  const data = {
    nodes,
    links
  };

  const options = {
    nodeHighlightBehavior: true,
    // staticGraph: false,
    staticGraphWithDragAndDrop: true,
    // width: 800,
    // height: 800,
    d3: {
      alphaTarget: 0.05,
      gravity: -150,
      linkLength: 200,
      linkStrength: 1
    },
    node: {
      color: 'lightgreen',
      size: 120,
      highlightStrokeColor: 'blue'
    },
    link: {
      highlightColor: 'lightblue'
    }
  };

  return (
    <Container>
      {world.length > 0 && <Graph id="graph-id" data={data} config={options} />}
    </Container>
  );
};

WorldView.defaultProps = {
  world: [
    {
      description: '',
      e_to: null,
      n_to: null,
      w_to: null,
      s_to: null,
      id: null,
      title: '',
      y: null,
      x: null
    }
  ],
  room: {
    id: null,
    title: '',
    description: ''
  }
};

WorldView.propTypes = {
  world: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      e_to: PropTypes.number,
      n_to: PropTypes.number,
      w_to: PropTypes.number,
      s_to: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      y: PropTypes.number,
      x: PropTypes.number
    })
  ),
  room: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string
  })
};

const Container = styled.div`
  height: 100%;
  width: 100%;

  svg {
    min-height: calc(100vh - 450px);
    min-width: 100%;
  }
`;

export default WorldView;
