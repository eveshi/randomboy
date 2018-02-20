import React, { Component } from 'react';
import './App.css';
import Person from './person/person';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      head_text: "Random Boy",
      peopleNumber: 0,
      numberGiven: 0,
    };
    this.inputPeople = this.inputPeople.bind(this);
    // this.submitData = this.submitData.bind(this);
    // this.randomPeople = this.randomPeople.bind(this);
  }

  inputPeople(event){
    this.setState({
      peopleNumber: event.target.value
    });
  }

  // submitData(){
  //   let newNumber;
  //   newNumber = parseInt(Math.random()*this.state.peopleNumber) + 1;
  //   this.setState({ 
  //     numberGiven: newNumber,
  //     text: "submit",
  //   });
  // }

  render() {
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
