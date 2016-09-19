import Vote from "Vote";
import Winner from "Winner";
import React from "react";

export default React.createClass({
    render: () => {
        return <div>
            {this.props.winner ?
                <Winner ref="winner" winner="{this.props.winner}"/> :
                <Vote {...this.props}/>}
        </div>;
    }
});