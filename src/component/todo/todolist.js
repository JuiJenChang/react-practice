import React, { Component } from 'react';
import './todo.css';
import { MdCancel } from "react-icons/md";

class Todo extends Component {
    constructor(props) {
        super()

        this.state = {
            taskList: [],
            task: '',
        }
    }

    handleTask = e => {
        const newTask = e.target.value
        this.setState({
            task: newTask
        })
    }

    addTsak = e => {
        const plusTask = this.state.task
        if (e.keyCode === 13) {
            this.setState({
                taskList: [...this.state.taskList, plusTask],
                task: ''
            })
        }
    }

    deleteTask = key => {
        const newList = this.state.taskList.filter((item, i) => {
            return i !== key
        })
        this.setState({
            taskList: newList
        })
    }

    render() {
        return (
            <div className="todo-body">
                <div className="todo-content">
                    <div className="todo-main">
                    <h1 className="todo-h1">To Do:</h1>
                    <input
                        className="todo-input"
                        value={this.state.task}
                        onChange={this.handleTask}
                        onKeyDown={this.addTsak}
                        placeholder='   Add task'
                    />
                    <div className="todo-list">
                        {this.state.taskList.map((item, i) =>
                            <li key={i}>
                                <input type="checkbox" />
                                {item}
                                <MdCancel 
                                className="todo-cancel"
                                onClick={() => this.deleteTask(i)}/>
                            </li>
                        )}
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Todo;