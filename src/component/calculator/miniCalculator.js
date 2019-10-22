import React, { Component } from 'react';
import './miniCalculator.css';

class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
        }
    }

    handleInput = val => {
        this.setState({
            input: this.state.input + val,
        })
    }

    equal = () => {
        this.setState({
            input: eval(this.state.input),
        })
    }

    deleteInput = () => {
        this.setState({
            input: this.state.input.slice(0, this.state.input.length - 1),
        })
    }

    clearInput = () => {
        this.setState({
            input: '',
        })
    }

    render() {
        return (
            <div className="calculator-content">
                <input className="calculator-view" value={this.state.input} />
                <div>
                    <button className="calculator-num" onClick={() => this.handleInput(1)} >1</button>
                    <button className="calculator-num" onClick={() => this.handleInput(2)} >2</button>
                    <button className="calculator-num" onClick={() => this.handleInput(3)} >3</button>
                    <button className="calculator-num" onClick={() => this.handleInput("+")} >+</button>
                </div>
                <div>
                    <button className="calculator-num" onClick={() => this.handleInput(4)} >4</button>
                    <button className="calculator-num" onClick={() => this.handleInput(5)} >5</button>
                    <button className="calculator-num" onClick={() => this.handleInput(6)} >6</button>
                    <button className="calculator-num" onClick={() => this.handleInput("-")} >-</button>
                </div>
                <div>
                    <button className="calculator-num" onClick={() => this.handleInput(7)} >7</button>
                    <button className="calculator-num" onClick={() => this.handleInput(8)} >8</button>
                    <button className="calculator-num" onClick={() => this.handleInput(9)} >9</button>
                    <button className="calculator-num" onClick={() => this.handleInput("*")} >*</button>
                </div>
                <div>
                    <button className="calculator-num" onClick={() => this.deleteInput()}>Del</button>
                    <button className="calculator-num" onClick={() => this.handleInput(0)} >0</button>
                    <button className="calculator-num" onClick={() => this.handleInput('.')} >.</button>
                    <button className="calculator-num" onClick={() => this.handleInput("/")} >/</button>
                </div>
                <div>
                    <button className="calculator-mc" onClick={() => this.clearInput()}>MC</button>
                    <button className="calculator-equal" onClick={() => this.equal()}>=</button>
                </div>
            </div>

        );
    }
}

export default Calculator;