import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Vote from './Components/Vote';
import Result from './Components/Result';
import Index from './Components/Index';



export class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.t = this.props.t;
        this.state = {

        };
    }

    render() {
        return (
            <Switch>
                <Route path="/"  exact component={Index} />
                <Route path="/Vote"  exact component={Vote} />
                <Route path="/Result" exact component={Result} />
            </Switch>
        )
    };
}
export default Routes;