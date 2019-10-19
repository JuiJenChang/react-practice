import React, { Component } from 'react';
import './miniCalculator.css';

class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: [],
            nums: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','.'],
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
                input: [parseInt(this.state.input[0]) + parseInt(this.state.input[2])],
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

    deleteInput = () => {
        const deleteInput = this.state.input;
        if (deleteInput.length >= 1) {
            deleteInput.pop();
            this.setState({
                input: deleteInput,
            })
        }
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
                    <button className="calculator-num" onClick={() => this.handleInput('1')} >{this.state.nums[1]}</button>
                    <button className="calculator-num" onClick={() => this.handleInput('2')} >{this.state.nums[2]}</button>
                    <button className="calculator-num" onClick={() => this.handleInput('3')} >{this.state.nums[3]}</button>
                    <button className="calculator-num" onClick={() => this.handleInput("+")} >{this.state.formula[0]}</button>
                </div>
                <div>
                    <button className="calculator-num" onClick={() => this.handleInput('4')} >{this.state.nums[4]}</button>
                    <button className="calculator-num" onClick={() => this.handleInput('5')} >{this.state.nums[5]}</button>
                    <button className="calculator-num" onClick={() => this.handleInput('6')} >{this.state.nums[6]}</button>
                    <button className="calculator-num" onClick={() => this.handleInput("-")} >{this.state.formula[1]}</button>
                </div>
                <div>
                    <button className="calculator-num" onClick={() => this.handleInput('7')} >{this.state.nums[7]}</button>
                    <button className="calculator-num" onClick={() => this.handleInput('8')} >{this.state.nums[8]}</button>
                    <button className="calculator-num" onClick={() => this.handleInput('9')} >{this.state.nums[9]}</button>
                    <button className="calculator-num" onClick={() => this.handleInput("*")} >{this.state.formula[2]}</button>
                </div>
                <div>
                    <button className="calculator-num">+/-</button>
                    <button className="calculator-num" onClick={() => this.handleInput(0)} >{this.state.nums[0]}</button>
                    <button className="calculator-num" onClick={() => this.handleInput(10)} >{this.state.nums[10]}</button>
                    <button className="calculator-num" onClick={() => this.handleInput("/")} >{this.state.formula[3]}</button>
                </div>
                <div>
                    <button className="calculator-func" onClick={() => this.clearInput()}>MC</button>
                    <button className="calculator-equal" onClick={() => this.calculatorNums()}>=</button>
                    <button className="calculator-func" onClick={() => this.deleteInput()}>Del</button>
                </div>
            </div>

        );
    }
}

export default Calculator;