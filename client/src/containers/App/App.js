import React, { PureComponent } from 'react';
import Layouts from '../../hoc/layouts/layouts';
import RandomPeople from '../randomPeople/randomPeople';
import ChooseMovie from '../chooseMovie/chooseMovie';
import classes from './App.css';

class App extends PureComponent {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

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
