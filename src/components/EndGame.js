import React, { Component } from "react";

class EndGame extends Component {
    render() {
        return (
            <div>
                {this.props.isWinner ? "Congratulations!" : "you lose :("}
            </div>
        );
    }
}
export default EndGame;
