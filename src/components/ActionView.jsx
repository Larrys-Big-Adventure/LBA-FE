import React, { Component } from 'react';
import {
  ListItem,
  ActionViewContainer,
  InputField,
  TextContainer
} from '../styles/ActionView';

class ActionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [],
      userInput: ''
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
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
