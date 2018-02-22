import React, { PureComponent } from 'react';
import classes from './App.css';
import Person from '../components/person/person';
import Menu from '../components/menu/menu';
import RandomName from '../components/randomName/randomName'

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
      peopleName: [

      ],
      newNameList: [

      ],
      personName: { id:'', name:'' },
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

  addName = ( event ) => {
    let nameItem = {...this.state.personName}
    nameItem.name = event.target.value;
    nameItem.id = Math.random()
    this.setState({
      personName: nameItem
    });

  }

  enterKey = ( event ) => {
    let nameList = [...this.state.peopleName];
    let name = this.state.personName;
    if( event.key === 'Enter' ){
      nameList = [name, ...nameList];
      name = { id:'', name:'' };
    };
    this.setState({
      peopleName: nameList,
      personName: name
    });
  }

  newOrder = () => {
    const nameList = this.state.peopleName;
    const newNameList = nameList.sort(( a, b ) => ( a.id - b.id ));
    this.setState({
      newNameList: newNameList
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
          <Person 
          change={this.inputPeople} 
          person={this.state.peopleNumber} />
          <RandomName 
          enterKey={this.enterKey}
          changeName={this.addName}
          newOrder={this.newOrder}
          name={this.state.personName.name}
          input={this.state.peopleName}
          output={this.state.newNameList} />
        </div>
      </div>
    );
  }
}

export default App;
