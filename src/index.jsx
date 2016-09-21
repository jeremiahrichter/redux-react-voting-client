import React from "react";
import ReactDOM from "react-dom";
import Voting from "./components/Voting";
import {Route, Router, hashHistory} from "react-router";
import App from "./components/App"
import Results from "./components/Results";
import reducer from './reducer';
import {createStore} from 'redux';

const store = createStore(reducer);
store.dispatch({
    type: 'SET_STATE',
    state: {
        vote: {
            pair: [
                'Trainspotting',
                '28 Days Later'
            ],
            tally: {
                'Sunshine': 2
            }
        }
    }
});

const routes = <Route component={App}>
    <Route path="/results" component={Results}/>
    <Route path="/" component={Voting}/>
</Route>;

ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('app')
);