import React, { Component } from 'react';
import './App.css';

class menuContent extends React.Component {
  constructor(props){

  }

  render(){
    return(
      <li></li>
    )
  }
}

class coolHead extends React.Component {
  constructor(props){
    this.state = {
      headText: "Random Boy",
      menuFlag: false,
    };
  }

  menu(){
    if(this.state.menuFlag){
      this.setState({
        menuFlag: false
      });
    }else{
      this.setState({
        menuFlag: true
      });
    }
  }

  render(){
    return(
      <div class="menu">
        <button onClick={this.menu}>
          <image src={menuImg}></image>
        </button>
        <div class="menuContent" style={menuFlag? "display:none":""}>
          <form>
            <ul><menuContent></menuContent></ul>
          </form>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      head_text: "Random Boy",
      peopleNumber: 0,
      numberGiven: 0,
    };
    this.inputPeople = this.inputPeople.bind(this);
    this.submitData = this.submitData.bind(this);
    // this.randomPeople = this.randomPeople.bind(this);
  }

  inputPeople(event){
    this.setState({
      peopleNumber: event.target.value
    });
    // let newNumber;
    // newNumber = parseInt(Math.random()*this.state.peopleNumber) + 1;
    // this.setState({ 
    //   numberGiven: newNumber
    // });
  }

  submitData(){
    let newNumber;
    newNumber = parseInt(Math.random()*this.state.peopleNumber) + 1;
    this.setState({ 
      numberGiven: newNumber,
      text: "submit",
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.head_text}
        </header>
        <div class="content">
          <div class="input">
            <input value={this.state.peopleNumber} onChange={this.inputPeople} />
            <button onClick={this.submitData}>{this.state.text}</button>
          </div>
          <div class="random">
            <p>{this.state.numberGiven}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
