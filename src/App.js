import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Aaron', age: 36 },
      { name: 'Bob', age: 30 },
      { name: 'Tom', age: 31 }
    ],
    otherState: 'Other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked')
    // this.state.persons[0].name = 'This is the first name' - Incorrect
    this.setState({
      persons: [
        { name: newName, age: 36 },
        { name: 'Bob', age: 30 },
        { name: 'Tom', age: 39 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, This is a new React App</h1>
        <p>This is working</p>
        <button onClick={() => this.switchNameHandler('Newest change to a name')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'This has changed')}>My Hobbies are: Cards</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'))
  }
}

export default App;
