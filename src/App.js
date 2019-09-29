import React, { Component } from 'react';
import Background from './component/backgroundSelect/backgroundSelect';
import Bmi from './component/bmiCalculator/bmiCalculator';
import Todo from './component/todo/todolist';

class App extends Component {
  render() {
    return (
      <div>
        <Todo />
      </div>
    );
  }
}

export default App;
