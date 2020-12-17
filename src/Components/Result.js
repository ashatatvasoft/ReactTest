
import React, { Component } from 'react';
import styled from 'styled-components';
import { VoteContext } from '../context/vote-contex';

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
export default class Result extends Component {
    static contextType = VoteContext;
    constructor(props) {
        super(props);
        this.state = {
            Votes: [],
        };
    }

    componentDidMount = () => {
        const load = setInterval(() => {
            if (this.context.VoteData[0].length > 0) {
                this.setState({ Votes: this.context.VoteData[0] });
                clearInterval(load);
            }
        }, 100);
    };

    render() {
        return (
            <>
                <Button onClick={this.props.history.goBack}>Back</Button>
                <Wrapper>
                    <h3>Result</h3>
                </Wrapper>
            </>
        )
    }
}