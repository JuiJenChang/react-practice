import React, { Component } from 'react';
import Background from './component/backgroundSelect/backgroundSelect';
import Bmi from './component/bmiCalculator/bmiCalculator';
import Todo from './component/todo/todolist';
import Calculator from './component/calculator/miniCalculator';
import Game from './component/xoGame/Game';

class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
