import React, { Component } from "react";
import Letter from "./Letter";
class Solution extends Component {
    render() {
        return (
            <div>
                {this.props.word.split("").map((letter, index) => {
                    if (!this.props.letterStatus[letter]) {
                        letter = "_";
                    }
                    return <Letter letter={letter} key={index}></Letter>;
                })}
                <div>{this.props.hint}</div>
            </div>
        );
    }
}
export default Solution;
