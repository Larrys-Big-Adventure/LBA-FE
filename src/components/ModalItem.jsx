import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalItem = ({ item }) => <Item>{item}</Item>;

const Item = styled.p``;

ModalItem.propTypes = {
  item: PropTypes.string.isRequired
};

export default ModalItem;
