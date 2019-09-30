import React, { Component } from 'react';

class Todoitem extends Component {
    constructor(props) {
        super()

        this.state = {
            status: false,
        }
    }
   
    checkItem = () => {
        this.setState({
            status: true
        })
    }

    render() {
        return (
            <div>
                <input 
                  type="checkbox"
                  onChange={this.checkItem}
                />
                {this.state.status ? 'isActive' : 'unActive'}
            </div>
        );
    }
}

export default Todoitem;