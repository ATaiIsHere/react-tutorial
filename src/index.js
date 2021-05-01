import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            resultMsg: '',
        };
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (squares[i] || this.resultMessage()) {
            return;
        }

        let xIsNext = this.state.xIsNext;
        squares[i] = xIsNext ? 'O' : 'X';
        xIsNext = !xIsNext;
        this.setState({ squares: squares, xIsNext: xIsNext });
    }

    resultMessage() {
        let squares = this.state.squares;

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
                return squares[positionA];
        }

        return;
    }

    render() {
        let resultMsg = this.resultMessage();
        let status = resultMsg ? resultMsg + ' is Winner!' : 'Next player:' + (this.state.xIsNext ? 'O' : 'X');

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
