import React, { Component } from 'react';
import Background from './component/backgroundSelect/backgroundSelect';
import Bmi from './component/bmiCalculator/bmiCalculator';

class App extends Component {
  render() {
    return (
      <div>
        <Bmi />
      </div>
    );
  }
}

export default App;
