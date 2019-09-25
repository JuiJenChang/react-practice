import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
     color: 'blue',
    }
  }
  
  change = e =>{
    this.setState({
      color: e.target.value
    });
    console.log(this.state.color)
  }

  render() {
    return (
      <div>
        <div className="content">
          <div className="main" style={{backgroundColor: this.state.color}}>
            <h1>Hello, World!!</h1>
            <p>What color?</p>
              <select value={this.state.color} onChange={this.change}>
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

export default App;
