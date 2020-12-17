
import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Wrapper = styled.section`
  padding: 4em;
  text-align:center;
`;

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { business: [] };
  }

  render() {
    return (
      <Wrapper>
        <h3 align="center">Welcome</h3>
        <Button primary onClick={() => { this.props.history.push('/Vote') }}>Vote</Button>
        <Button primary onClick={() => { this.props.history.push('/Result') }}>Result</Button>
      </Wrapper >
    );
  }
}