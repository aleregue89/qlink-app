import React, {Component} from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import Shop from './Shop'
import Details from './Details'
import history from './history'

class Routes extends Component {

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Shop} />
                    <Route path="/details" component={Details} />
                </Switch>
            </Router>
        )
    }
}

export default Routes