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
        { id: "rp", name: "Random Person", choose: true },
        { id: "rm", name: "Random Movie", choose: false },
        { id: "rms", name: "Random Music", choose: false },
        { id: "rres", name: "Random Restaurant", choose: false },
      ],
      peopleNumber: 0,
    };
  }

  menuChoose = ( event, id ) => {
    const itemIndex = this.state.menu.findIndex(item => {
      return item.id === id;
    });

    const menuItem = {
      ...this.state.menu[itemIndex]
    };
    menuItem.choose = true;

    const menu = [...this.state.menu];
    menu.map((item) => {
      return item.choose = false
    });
    menu[itemIndex] = menuItem;

    this.setState({
      menu: menu
    });
  }
 
  inputPeople = ( event ) => {
    this.setState({
      peopleNumber: event.target.value
    });
  }

  render() {
    const styleChoose = {
      backgroundColor: "#eee", 
    };

    const styleNotChoose = {
      backgroundColor: "#fff",  
    }

    const menu = (
      <div>
        {this.state.menu.map((item) => {
          return <Menu
          click={(event) => this.menuChoose(event, item.id)}
          key={item.id} 
          name={item.name}
          goodStyle={item.choose?styleChoose:styleNotChoose} ></Menu>
        })}
      </div>
    )

    return (
      <div className="App">
        <header className="App-header">
          {this.state.head_text}
        </header>
        {menu}
        <div className="content">
          <Person change={this.inputPeople} person={this.state.peopleNumber}></Person>
        </div>
      </div>
    );
  }
}

export default App;
