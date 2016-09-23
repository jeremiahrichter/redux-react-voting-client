import React from "react";
import ReactDOM from "react-dom";
import {VotingContainer} from "./components/Voting";
import {Route, Router, hashHistory} from "react-router";
import App from "./components/App"
import {ResultsContainer} from "./components/Results";
import reducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware
)(createStore);
const store = createStoreWithMiddleware(reducer);

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => {
    store.dispatch(setState(state));
});

const routes = <Route component={App}>
    <Route path="/results" component={ResultsContainer}/>
    <Route path="/" component={VotingContainer}/>
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);