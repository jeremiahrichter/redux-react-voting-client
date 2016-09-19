import React from "react";

export default React.createClass({
    getPair: function () {
        return this.props.pair || [];
    },
    isDisabled: () => {
        return !!this.props.hasVoted;
    },
    hasVotedFor: (entry) => {
        return this.props.hasVoted === entry;
    },
    render: function () {
        return <div className="voting">
            {this.props.winner?
                <div ref="winner">The winner is {this.props.winner}!</div>:
                this.getPair().map(entry =>
                <button key={entry}
                        onClick={() => this.props.vote(entry)}
                        disabled={this.props.isDisabled()}>
                    <h1>{entry}</h1>
                    {
                        this.hasVotedFor(entry) ?
                            <div className="label">Voted</div> :
                            null
                    }
                </button>
            )}
        </div>;
    }
});