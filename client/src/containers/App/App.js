import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Page from '../Page/page'
import classes from './App.css';

class App extends PureComponent {

  render() {
    return (
      <BrowserRouter>
        <Page />
      </BrowserRouter>
     );
  }
}

export default App;
