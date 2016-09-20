import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    getVotes: function () {
        if (this.props.tally && this.props.tally.has(entry)) {
            return this.props.tally.get(entry);
        } else {
            return 0;
        }
    },
    getPair: function () {
        return this.props.pair || [];
    },
    render: function () {
        return <div className="results">
            {this.getPair().map(entry =>
                <div key={entry} className="entry">
                    <h1>{entry}</h1>
                    <div className="voteCount">
                        {this.getVotes(entry)}
                    </div>
                </div>
            )}
        </div>;
    }
});