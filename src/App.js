import React, { Component } from 'react';
import Background from './component/backgroundSelect/backgroundSelect';
import Bmi from './component/bmiCalculator/bmiCalculator';
import Todo from './component/todo/todolist';
import Calculator from './component/calculator/miniCalculator';
import Board from './component/xoGame/Board';

class App extends Component {
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default App;
