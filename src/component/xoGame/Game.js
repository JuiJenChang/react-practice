import React, { Component } from 'react';
import Board from './Board';
import './xoGame.css';

class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.calculatorWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            xIsNext: !this.state.xIsNext,
        });
    }

    calculatorWinner(squares) {
        const line = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (var i = 0; i < line.length; i++) {
            const [a, b, c] = line[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = this.calculatorWinner(current.squares);

        let status;
        if (winner) {
            status = 'Winner : ' + winner;
        }
        else {
            status = 'Next Player : ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div>
                <div>
                    <div className="xogame-status">{status}</div>
                </div>
                <Board
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                />
            </div>
        );
    }
}

export default Game;