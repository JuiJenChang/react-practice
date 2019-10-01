import React, { Component } from 'react';
import './todo.css';
import { MdCancel } from "react-icons/md";

class Todo extends Component {
    constructor(props) {
        super()

        this.state = {
            taskList: [],
            task: '',
            status: false,
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

    checkItem = () => {
        this.setState({
            status: !this.state.status
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
                        {this.state.taskList.map((item, i) =>
                            <li className="todo-list" key={i}>
                                <input
                                    type="checkbox"
                                    onChange={this.checkItem}
                                />
                                <span style={{ textDecorationLine: this.state.status ? 'line-through' : 'none' }}>{item}</span>
                                <MdCancel
                                    className="todo-cancel"
                                    onClick={() => this.deleteTask(i)} />
                            </li>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo;