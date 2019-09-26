import React, { Component } from 'react';
import './bmi.css';

class Bmi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            height: '',
            weight: '',
            bmi: '',
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
            height: 0,
            weight: 0,
            bmi: 0
        })
    }

    render() {
        return (
            <div>
                <h2>BMI Healthy Weight Calculator</h2>
                <span>Body Mass Index(BMI) = {this.state.bmi}</span>
                <h3>{this.state.result}</h3>
                <div>
                    Height(cm)
                <input
                        value={this.state.height}
                        onChange={this.heightInput}
                    />
                    Weight(kg)
                <input
                        value={this.state.weight}
                        onChange={this.weightInput}
                        onKeyDown={this.bmiCalaulator}
                    />
                </div>
                <button onClick={this.resetInput}>RESET</button>
            </div>
        );
    }
}

export default Bmi;