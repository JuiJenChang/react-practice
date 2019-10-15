import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: [],
            nums: [0,1,2,3,4,5,6,7,8,9],
        }
    }

    handleInput = e => {
        const newInput = this.state.input;
        if(e === this.state.nums[e]){
            newInput.push(e);
            this.setState({
                input: newInput,
            })
        }
    }

    plusNum = () => {
        const plusInput = this.state.input[0] + this.state.input[1];
        this.setState({
            input: plusInput,
        })
    }

    minusNum = () => {
        const minusInput = this.state.input[0] - this.state.input[1];
        this.setState({
            input: minusInput,
        })
    }

    multiplyNum = () => {
        const multiplyInput = this.state.input[0] * this.state.input[1];
        this.setState({
            input: multiplyInput,
        })
    }

    dividedNum = () => {
        const dividedInput = this.state.input[0] / this.state.input[1];
        this.setState({
            input: dividedInput,
        })
    }

    clearInput = () => {
        this.setState({
            input: [],
        })
    }

    render() {
        return (
            <div>
                <input  value={this.state.input}/>
                <input type="button"  onClick={() => this.handleInput(0)} value={this.state.nums[0]} />
                <input type="button"  onClick={() => this.handleInput(1)} value={this.state.nums[1]} />
                <input type="button"  onClick={() => this.handleInput(2)} value={this.state.nums[2]} />
                <input type="button"  onClick={() => this.handleInput(3)} value={this.state.nums[3]} />
                <input type="button"  onClick={() => this.handleInput(4)} value={this.state.nums[4]} />
                <input type="button"  onClick={() => this.handleInput(5)} value={this.state.nums[5]} />
                <input type="button"  onClick={() => this.handleInput(6)} value={this.state.nums[6]} />
                <input type="button"  onClick={() => this.handleInput(7)} value={this.state.nums[7]} />
                <input type="button"  onClick={() => this.handleInput(8)} value={this.state.nums[8]} />
                <input type="button"  onClick={() => this.handleInput(9)} value={this.state.nums[9]} />
                <button onClick={() => this.plusNum()}>+</button>
                <button onClick={() => this.minusNum()}>-</button>
                <button onClick={() => this.multiplyNum()}>*</button>
                <button onClick={() => this.dividedNum()}>/</button>
                <button onClick={() => this.clearInput()}>MC</button>
            </div>
        );
    }
}

export default Calculator;