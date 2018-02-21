import React, { Component } from 'react';
import './App.css';
import Person from './person/person';
import Menu from './menu/menu';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      head_text: "Random Boy",
      menu: [
        { id: "rp", name: "Random Person" },
        { id: "rm", name: "Random Movie" },
        { id: "rms", name: "Random Music" },
        { id: "rres", name: "Random Restaurant" },
      ],
      peopleNumber: 0,
    };
  }
 
  inputPeople = ( event ) => {
    this.setState({
      peopleNumber: event.target.value
    });
  }

  render() {
    // const menu = this.state.

    return (
      <div className="App">
        <header className="App-header">
          {this.state.head_text}
        </header>
        <div class="content">
          <Person change={this.inputPeople} person={this.state.peopleNumber}></Person>
        </div>
      </div>
    );
  }
}

export default App;
