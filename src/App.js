import "./App.css";
import Score from "./components/Score";
import Letters from "./components/Letters";
import Solution from "./components/Solution";
import React, { Component } from "react";
import EndGame from "./components/EndGame";

const generateLetterStatuses = () => {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
        letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
};

export class App extends Component {
    constructor() {
        super();
        this.state = {
            letterStatus: generateLetterStatuses(),
            solution: { word: "CALM", hint: "your ideal mood when coding" },
            score: 100,
            isGameEnd: false,
            iswinner: false,
        };
    }

    isWinner = () => {
        for (let letter of this.state.solution.word.split("")) {
            if (!this.state.letterStatus[letter]) {
                return false;
            }
        }
        return true;
    };
    isGameOver = () => {
        if (this.state.score <= 0) {
            return true;
        }
        return false || this.isWinner();
    };
    updateTurnDetails = () => {
        this.setState({
            isGameEnd: this.isGameOver(),
            iswinner: this.isWinner(),
        });
    };
    getUpdateScore = (selectedLetter) => {
        let newScore = this.state.score;
        newScore = this.state.solution.word.includes(selectedLetter)
            ? newScore + 5
            : newScore - 20;
        return newScore;
    };
    selectLetter = (selectedLetter) => {
        const currentLetterStatus = JSON.parse(
            JSON.stringify(this.state.letterStatus)
        );
        currentLetterStatus[selectedLetter] = true;
        this.setState(
            {
                letterStatus: currentLetterStatus,
                score: this.getUpdateScore(selectedLetter),
            },
            this.updateTurnDetails
        );
    };

    render() {
        return (
            <div className="App">
                {!this.state.isGameEnd ? (
                    <div>
                        <Score score={this.state.score} />
                        <Solution
                            letterStatus={this.state.letterStatus}
                            word={this.state.solution.word}
                            hint={this.state.solution.hint}
                        />
                        <Letters
                            selectLetter={this.selectLetter}
                            letterStatus={this.state.letterStatus}
                        ></Letters>
                    </div>
                ) : (
                    <EndGame isWinner={this.state.iswinner}></EndGame>
                )}
            </div>
        );
    }
}

export default App;
