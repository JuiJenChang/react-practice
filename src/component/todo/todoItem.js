import React, { Component } from 'react';

class Todoitem extends Component {
    constructor(props) {
        super()

        this.state = {
            task: '',
            status: false,
        }
    }
   
    checkItem = () => {
       const newTask = this.state.status ? 'unActive' : 'isActive'
        this.setState({
            task: newTask
        })
    }

    render() {
        return (
            <div>
                <input 
                  type="checkbox"
                  onChange={this.checkItem}
                />
                {this.state.task}
            </div>
        );
    }
}

export default Todoitem;