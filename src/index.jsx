import React from "react";
import ReactDOM from "react-dom";
import Vote from "./components/Vote";

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
    <Vote pair={pair} hasVoted="Trainspotting"/>,
    document.getElementById('app')
);