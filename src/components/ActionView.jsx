import React, { Component } from 'react';
import {
  ListItem,
  ActionViewContainer,
  InputField,
  TextContainer,
  SendButton,
  UserInputContainer,
  Form
} from '../styles/ActionView';

import {
  Container,
  Button,
  Icon,
  Sprite,
  ControllerIcon,
  Table,
  List,
  TextArea,
  TextInput
} from 'nes-react';

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

  submit = event => {
    event.preventDefault();
    const newAction = {
      id: Date.now(),
      action: this.state.userInput
    };
    this.setState({
      actions: [...this.state.actions, newAction],
      userInput: ''
    });
  };

  renderAction = item => {
    console.log(item);
    return <li key={item.id}>You: {item.action}</li>;
  };

  render() {
    return (
      <ActionViewContainer>
        <Container>
          <link
            href="https://fonts.googleapis.com/css?family=Press+Start+2P"
            rel="stylesheet"
          />
          <TextContainer>
            {this.state.actions.map(this.renderAction)}
          </TextContainer>
          <UserInputContainer>
            <Form onSubmit={this.submit}>
              <TextInput
                type="text"
                name="userInput"
                id="userinput"
                placeholder="user input field"
                onChange={this.handleInputChange}
                value={this.state.userInput}
              />
              <Button type="submit">Send</Button>
            </Form>
          </UserInputContainer>
        </Container>
      </ActionViewContainer>
    );
  }
}

export default ActionView;

// loop to print updated list
