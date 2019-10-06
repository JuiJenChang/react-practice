import React, { Component } from 'react';
import './xoGame.css';
import Square from './Square';

class Board extends Component {
    constructor(props) {
        super(props)

        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    hanldeClick(i) {
        const squares = this.state.squares.slice();
        if (this.calculatorWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.hanldeClick(i)}
            />
        );
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
        const winner = this.calculatorWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner : ' + winner;
        }
        else {
            status = 'Next Player : ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="xogame-status">{status}</div>
                <div className="xogame-board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="xogame-board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="xogame-board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;