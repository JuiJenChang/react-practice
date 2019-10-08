import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props) {
        super()

        this.state = {
            input: 0,
            num: [0,1,2,3,4,5,6,7,8,9],
        }
    }

    render() {
        return (
            <div>
                <input value={this.state.input}/>
                <button onClick={this.clickNum1}>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>*</button>
            </div>
        );
    }
}

export default Calculator;