import React from 'react';
import Board from './Board'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [Array(9).fill(null)],
            xIsNext: false,
        };
    }

    whosTurn = (squares) => {
        let notEmptyCount = squares.filter((item) => item !== null).length;

        return notEmptyCount % 2 === 0 ? 'O' : 'X';
    };

    clickHandler = (i) => {
        let history = this.state.history.slice();
        let squares = history[history.length - 1].slice();
        const whosTurn = this.whosTurn(squares);

        if (squares[i] !== null || this.resultMessage().indexOf('Winner') >= 0) {
            return;
        }
        squares[i] = whosTurn;
        history.push(squares);

        this.setState({ history: history, xIsNext: whosTurn === 'O' });
    };

    jumpToMove = (i) => {
        let history = this.state.history.slice(0, i + 1);
        const whosTurn = this.whosTurn(history[history.length - 1]);

        this.setState({ history: history, xIsNext: whosTurn === 'X' });
    };

    renderBoard = () => {
        return <Board squares={this.state.history[this.state.history.length - 1]} onClick={this.clickHandler} />;
    };

    historyList = () => {
        const history = this.state.history;
        return history.map((item, index) => {
            return (
                <li key={index}>
                    <button onClick={() => this.jumpToMove(index)}>
                        {index === 0 ? 'Go to game start' : `Go to move #${index}`}
                    </button>
                </li>
            );
        });
    };

    resultMessage = () => {
        const history = this.state.history;
        const squares = history[history.length - 1];

        let winnerCases = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winnerCases.length; i++) {
            let [positionA, positionB, positionC] = winnerCases[i];

            if (
                squares[positionA] &&
                squares[positionA] === squares[positionB] &&
                squares[positionB] === squares[positionC]
            )
                return `${squares[positionA]} is Winner!`;
        }

        if (this.state.xIsNext) {
            return 'Next Player: X';
        } else {
            return 'Next Player: O';
        }
    };

    render() {
        return (
            <div className="game">
                <div className="game-board">{this.renderBoard()}</div>
                <div className="game-info">
                    <div>{this.resultMessage()}</div>
                    <ol>{this.historyList()}</ol>
                </div>
            </div>
        );
    }
}

export default Game;