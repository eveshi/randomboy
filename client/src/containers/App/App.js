import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Layouts from '../../hoc/layouts/layouts';
import RandomPeople from '../randomPeople/randomPeople';
import ChooseMovie from '../chooseMovie/chooseMovie';
import classes from './App.css';

class App extends PureComponent {

  render() {
    return (
      <BrowserRouter>
        <Layouts>
          <RandomPeople />
          <ChooseMovie />
        </Layouts>
      </BrowserRouter>
     );
  }
}

export default App;
