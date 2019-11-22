/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Graph } from 'react-d3-graph';

const WorldView = ({ world, room }) => {
  const [currentNode, setCurrentNode] = useState();
  let nodes = world.map(item => ({ id: item.id }));
  let links = [];
  let linksToCome = world.forEach(world => {
    if (world['n_to'] !== 0) {
      links.push({ source: world.id, target: world['n_to'] });
    }
    if (world['s_to'] !== 0) {
      links.push({ source: world.id, target: world['s_to'] });
    }
    if (world['w_to'] !== 0) {
      links.push({ source: world.id, target: world['w_to'] });
    }
    if (world['e_to'] !== 0) {
      links.push({ source: world.id, target: world['e_to'] });
    }
  });
  console.log('links to come', links);
  //const [nodes, setNodes] = useState(stuffForNodes);
  const data = {
    nodes,
    links
  };
  console.log(data.nodes);

  const options = {
    /*
    automaticRearrangeAfterDropNode: false,
    collapsible: false,
    directed: false,
    focusAnimationDuration: 0.75,
    focusZoom: 1,
    height: 400,
    highlightDegree: 1,
    highlightOpacity: 1,
    linkHighlightBehavior: true,
    maxZoom: 8,
    minZoom: 0.1,
    nodeHighlightBehavior: true,
    panAndZoom: false,
    staticGraph: true,
    staticGraphWithDragAndDrop: false,
    d3: {
      alphaTarget: 0.05,
      gravity: -500,
      linkLength: 100,
      linkStrength: 1
    },
    node: {
      color: 'green',
      fontColor: 'black',
      fontSize: 4,
      fontWeight: 'normal',
      highlightColor: 'SAME',
      highlightFontSize: 15,
      highlightFontWeight: 'normal',
      highlightStrokeColor: 'SAME',
      highlightStrokeWidth: 'SAME',
      mouseCursor: 'pointer',
      opacity: 1,
      renderLabel: false,
      size: 4,
      strokeColor: 'red',
      strokeWidth: 3,
      svg: '',
      symbolType: 'circle'
    },
    link: {
      color: '#d3d3d3',
      fontColor: 'black',
      fontSize: 8,
      fontWeight: 'normal',
      highlightColor: '#d3d3d3',
      highlightFontSize: 8,
      highlightFontWeight: 'normal',
      labelProperty: 'label',
      mouseCursor: 'pointer',
      opacity: 1,
      renderLabel: false,
      semanticStrokeWidth: true,
      strokeWidth: 1.5
    }*/ nodeHighlightBehavior: true,
    node: {
      color: 'lightgreen',
      size: 120,
      highlightStrokeColor: 'blue'
    },
    link: {
      highlightColor: 'lightblue'
    }
  };
  const onNodePositionChange = function(nodeId, x, y) {
    window.alert(
      `Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`
    );
  };
  console.log('before container world', world.length);
  return (
    <Container>
      {world.length > 0 && (
        <Graph
          id="graph-id"
          data={data}
          config={options}
          onNodePositionChange={onNodePositionChange}
        />
      )}
    </Container>
  );
};

WorldView.defaultProps = {
  world: {
    description: '',
    e_to: null,
    n_to: null,
    w_to: null,
    s_to: null,
    id: null,
    title: '',
    y: null,
    x: null
  },
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
  border: 4px solid red;
`;

export default WorldView;
