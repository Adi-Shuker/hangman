import React, { Component } from "react";
import Letter from "./Letter";

class Letters extends Component {
    render() {
        return (
            <div>
                <div>available letters</div>
                {Object.keys(this.props.letterStatus).map((letter, index) => {
                    return (
                        <Letter
                            key={index}
                            letter={letter}
                            letterStatus={this.props.letterStatus[letter]}
                            selectLetter={this.props.selectLetter}
                        ></Letter>
                    );
                })}
            </div>
        );
    }
}

export default Letters;
