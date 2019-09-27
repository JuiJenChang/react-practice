import React, { Component } from 'react';
import './bmi.css';

class Bmi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            height: '',
            weight: '',
            bmi: null,
            result: ''
        }
    }

    heightInput = e => {
        const heightText = e.target.value;
        this.setState({
            height: heightText
        })
    }

    weightInput = e => {
        const weightText = e.target.value;
        this.setState({
            weight: weightText
        })
    }

    bmiCalaulator = (e) => {
        const h = this.state.height;
        const w = this.state.weight;
        if (e.keyCode === 13) {
            this.setState({
                bmi: Math.round(w / (h * h * 0.0001))
            })
            if (this.state.bmi < 18.5) {
                this.setState({
                    result: 'Under Weight'
                })
            }
            if (this.state.bmi >= 18.5 && this.state.bmi < 24) {
                this.setState({
                    result: 'Normal Weight'
                })
            }
            if (this.state.bmi >= 24 && this.state.bmi < 27.9) {
                this.setState({
                    result: 'Over Weight'
                })
            }
            if (this.state.bmi >= 27.9) {
                this.setState({
                    result: 'Obesity'
                })
            }
        }
    }

    resetInput = () => {
        this.setState({
            height: '',
            weight: '',
            bmi: null,
            result: ''
        })
    }

    render() {
        return (
            <div className="bmi-body">
                <h1 className="bmi-h1">BMI Healthy Weight Calculator</h1>
                <div className="bmi-content">
                <div className="bmi-main">
                    <span className="bmi-span">Body Mass Index(BMI) = {this.state.bmi}</span>
                    <h3 className="bmi-h3">{this.state.result}</h3>
                    <div className="bmi-h">
                        <span className="bmi-span-h">Height(cm)</span>
                <input
                        className="bmi-input-h"
                        value={this.state.height}
                        onChange={this.heightInput}
                    />
                    </div>
                    <div className="bmi-w">
                        <span className="bmi-span-w">Weight(kg)</span>
                <input
                        className="bmi-input-w"
                        value={this.state.weight}
                        onChange={this.weightInput}
                        onKeyDown={this.bmiCalaulator}
                    />
                    </div>
                    <button className="bmi-btn" onClick={this.resetInput}>RESET</button>
                </div>
                </div>
            </div>
        );
    }
}

export default Bmi;