import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, This is a new React App</h1>
        <p>This is working</p>
        <Person name="Aaron" age="36" />
        <Person name="Bob" age="30">My Hobbies are: Cards</Person>
        <Person name="Tim" age="34" />
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'))
  }
}

export default App;
