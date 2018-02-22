import React, { PureComponent } from 'react';
import classes from './App.css';
import Person from '../components/person/person';
import Menu from '../components/menu/menu';

class App extends PureComponent {
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

  shouldComponentUpdate( nextProps, nextState ){
    return nextProps.menu !== this.state.menu
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
    console.log("changed")
  }
 
  inputPeople = ( event ) => {
    this.setState({
      peopleNumber: event.target.value
    });
  }

  render() {
    return (
      <div className={classes.App}>
        <header className={classes.header}>
          {this.state.head_text}
        </header>
        <div>
          <Menu 
          menu={this.state.menu}
          click={this.menuChoose} />
        </div>
        <div className="content">
          <Person change={this.inputPeople} person={this.state.peopleNumber}></Person>
        </div>
      </div>
    );
  }
}

export default App;
