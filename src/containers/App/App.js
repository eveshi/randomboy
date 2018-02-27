import React, { PureComponent } from 'react';
import Layouts from '../../hoc/layouts/layouts';
import RandomPeople from '../randomPeople/randomPeople';
import ChooseMovie from '../chooseMovie/chooseMovie';
import classes from './App.css';



class App extends PureComponent {

  render() {
    return (
        <Layouts>
          <RandomPeople />
          <ChooseMovie />
        </Layouts>
    );
  }
}

export default App;
