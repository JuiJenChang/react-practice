import React, { Component } from 'react';
import './xoGame.css';

class Square extends Component {
    render() {
        return (
            <div>
                <button className="xogame-square" onClick={this.props.onClick}>
                    {this.props.value}
                </button>
            </div>
        );
    }
}

export default Square;