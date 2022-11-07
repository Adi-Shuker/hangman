import React, { Component } from "react";
import "./Style.css";

class Letter extends Component {
    selectLetter = () => {
        this.props.selectLetter(this.props.letter);
    };
    render() {
        return (
            <span className="letter">
                {this.props.letterStatus ? (
                    <span className="selected-letter">{this.props.letter}</span>
                ) : (
                    <span
                        onClick={this.selectLetter}
                        className="unselected-letter"
                    >
                        {this.props.letter}
                    </span>
                )}
            </span>
        );
    }
}
export default Letter;
