import React, { Component } from 'react';
import {
  ListItem,
  ActionViewContainer,
  InputField,
  TextContainer
} from '../styles/ActionView';

class ActionView extends Component {
  state = {
    roomInfo: []
  };

  render() {
    return (
      <ActionViewContainer>
        <TextContainer>
          <li>look at this content</li>
          <li>look at this content</li>
          <li>look at this content</li>
          <li>look at this content</li>
          <li>look at this content</li>
        </TextContainer>

        <InputField></InputField>
      </ActionViewContainer>
    );
  }
}

export default ActionView;

// loop to print updated list
