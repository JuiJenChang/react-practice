import React, { Component } from 'react';
import './miniCalculator.css';

class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: [],
            nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            formula: ['+', '-', '*', '/'],
        }
    }

    handleInput = e => {
        const newInput = this.state.input;
        if (e === this.state.nums[e]) {
            newInput.push(e);
            this.setState({
                input: newInput,
            })
        }
        for (var i = 0; i < this.state.formula.length; i++) {
            if (e === this.state.formula[i]) {
                newInput.push(e);
                this.setState({
                    input: newInput,
                })
            }
        }
        console.log(this.state.input);
    }
    calculatorNums = () => {
        if (this.state.input[1] === '+') {
            this.setState({
                input: [this.state.input[0] + this.state.input[2]],
            })
        }
        if (this.state.input[1] === '-') {
            this.setState({
                input: [this.state.input[0] - this.state.input[2]],
            })
        }
        if (this.state.input[1] === '*') {
            this.setState({
                input: [this.state.input[0] * this.state.input[2]],
            })
        }
        if (this.state.input[1] === '/') {
            this.setState({
                input: [this.state.input[0] / this.state.input[2]],
            })
        }
        console.log(this.state.input);
    }

    clearInput = () => {
        this.setState({
            input: [],
        })
    }

    render() {
        return (
            <div className="calculator-content">
                <div className="calculator-view">
                    {this.state.input}
                </div>
                <div>
                    <input type="button" onClick={() => this.handleInput(1)} value={this.state.nums[1]} />
                    <input type="button" onClick={() => this.handleInput(2)} value={this.state.nums[2]} />
                    <input type="button" onClick={() => this.handleInput(3)} value={this.state.nums[3]} />
                    <input type="button" onClick={() => this.handleInput('+')} value={this.state.formula[0]} />
                </div>
                <div>
                    <input type="button" onClick={() => this.handleInput(4)} value={this.state.nums[4]} />
                    <input type="button" onClick={() => this.handleInput(5)} value={this.state.nums[5]} />
                    <input type="button" onClick={() => this.handleInput(6)} value={this.state.nums[6]} />
                    <input type="button" onClick={() => this.handleInput('-')} value={this.state.formula[1]} />
                </div>
                <div>
                    <input type="button" onClick={() => this.handleInput(7)} value={this.state.nums[7]} />
                    <input type="button" onClick={() => this.handleInput(8)} value={this.state.nums[8]} />
                    <input type="button" onClick={() => this.handleInput(9)} value={this.state.nums[9]} />
                    <input type="button" onClick={() => this.handleInput('*')} value={this.state.formula[2]} />
                </div>
                <div>
                    <button onClick={() => this.clearInput()}>MC</button>
                    <input type="button" onClick={() => this.handleInput(0)} value={this.state.nums[0]} />
                    <button onClick={() => this.calculatorNums()}>=</button>
                    <input type="button" onClick={() => this.handleInput('/')} value={this.state.formula[3]} />
                </div>
            </div>
        );
    }
}

export default Calculator;