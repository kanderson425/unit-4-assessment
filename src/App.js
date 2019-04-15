import React, { Component } from 'react';
import './App.css';
import CircleSelector from './Components/CircleSelector/CircleSelector';
import Circles from './Components/Circles/Circles';

const circles = ['1', '2', '3', '4']

class App extends Component {
  constructor() {
    super();
    // this.handleCircleSelection = this.handleCircleSelection.bind(this);
    this.state = {
      selected: 1
    }
  }

  // handleCircleSelection(e) {
  //   let newSelected = 1;
  // }

  handleClick1 = () => {
    let newSelected = 1;
    this.setState({selected: newSelected});
    console.log('You clicked on button 1');
  }

  handleClick2 = () => {
    let newSelected = 2;
    this.setState({selected: newSelected});
    console.log('You clicked on button 2');
  }

  handleClick3 = () => {
    let newSelected = 3;
    this.setState({selected: newSelected});
    console.log('You clicked on button 3');
  }

  handleClick4 = () => {
    let newSelected = 4;
    this.setState({selected: newSelected});
    console.log('You clicked on button 4');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            selected={this.state.selected}
            handleCircleSelection={this.handleCircleSelection}
            handleClick1={this.handleClick1} 
            handleClick2={this.handleClick2} 
            handleClick3={this.handleClick3} 
            handleClick4={this.handleClick4} 
          />
          <Circles 
            selected={this.state.selected}
            handleCircleSelection={this.handleCircleSelection}
          />
        </main>
      </div>
    );
  }
}

export default App;
