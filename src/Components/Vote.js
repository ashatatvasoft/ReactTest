import React, { Component } from 'react';
import { VoteContext } from '../context/vote-contex';
import styled from 'styled-components'

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

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "black"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export default class Vote extends Component {

    static contextType = VoteContext;
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            Food: '',
        };
    }

    myChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    onSubmit = (event) => {
        const [votes, setVote] = this.context.VoteData;
        var data = {
            name: this.state.name,
            email: this.state.email,
            pizza: this.state.Food === "Pizza" ? votes.pizza + 1 : votes.pizza,
            pasta: this.state.Food === "Pasta" ? votes.pasta + 1 : votes.pasta,
            burger: this.state.Food === "Burger" ? votes.burger + 1 : votes.burger,
        };
        setVote(data);

    }
    render() {
        return (
            <>
                <Button onClick={this.props.history.goBack}>Back</Button>
                <Wrapper>
                    <h3>Vote</h3>
                    <form onSubmit={this.onSubmit}>
                        <div >
                            <label>Name: </label>
                            <Input type="text" name="name" placeholder="Enter Name" onChange={this.myChangeHandler} required />
                        </div>
                        <div >
                            <label>Email: </label>
                            <Input type="email" name="email" placeholder="Enter Email" onChange={this.myChangeHandler} required />
                        </div>

                        <div className="form-group">
                            <div>
                                <label>Food: </label>
                                <label><Input type="radio" name="Food" label="Food" onChange={this.myChangeHandler} value="Pizza" />Pizza </label>
                                <label><Input type="radio" name="Food" label="Food" onChange={this.myChangeHandler} value="Burger" />Burger</label>
                                <label><Input type="radio" name="Food" label="Food" onChange={this.myChangeHandler} value="Pasta" />Pasta</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <Button type="submit" primary>Submit</Button>
                        </div>
                    </form>
                </Wrapper>
            </>
        )
    }
} 