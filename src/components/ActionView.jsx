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
          <ListItem>look at this content</ListItem>
          <ListItem>look at this content</ListItem>
          <ListItem>look at this content</ListItem>
          <ListItem>look at this content</ListItem>
          <ListItem>look at this content</ListItem>
          <ListItem>look at this content</ListItem>
          <ListItem>look at this content</ListItem>
          <ListItem>look at this content</ListItem>
          <ListItem>new new new new new</ListItem>
        </TextContainer>

        <InputField type="text" placeholder="user input field"></InputField>
      </ActionViewContainer>
    );
  }
}

export default ActionView;

// loop to print updated list
