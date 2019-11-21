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
    return <ListItem key={item.id}>{item.action}</ListItem>;
  };

  render() {
    return (
      <ActionViewContainer>
        <TextContainer>
          {this.state.actions.map(this.renderAction)}
        </TextContainer>
        <UserInputContainer>
          <Form onSubmit={this.submit}>
            <InputField
              type="text"
              name="userInput"
              id="userinput"
              placeholder="user input field"
              onChange={this.handleInputChange}
              value={this.state.userInput}
            />
            <SendButton type="submit">Send</SendButton>
          </Form>
        </UserInputContainer>
      </ActionViewContainer>
    );
  }
}

export default ActionView;

// loop to print updated list
