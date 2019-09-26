import React, { Component } from 'react';
import './background.css';

class Background extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: 'blue',
        }
    }

    change = e => {
        this.setState({
            color: e.target.value
        });
        console.log(this.state.color)
    }

    render() {
        return (
            <div>
                <div className="background-content">
                    <div className="background-main" style={{ backgroundColor: this.state.color }}>
                        <h1 className="background-h1">Hello, World!!</h1>
                        <p className="background-p">What color?</p>
                        <select className="background-select" value={this.state.color} onChange={this.change}>
                            <option value="blue">Blue</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="brown">Brown</option>
                            <option value="purple">Purple</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default Background;