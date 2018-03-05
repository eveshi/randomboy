import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layouts from '../../hoc/layouts/layouts';
import RandomPeople from './randomPeople/randomPeople';
import ChooseMovie from './chooseMovie/chooseMovie';
import ChooseMusic from './chooseAlbum/chooseAlbum';

class Page extends Component {

    render(){
        return (
            <Layouts>
                <Route path="/" exact component={RandomPeople} />
                <Route path="/rp" exact component={RandomPeople} />
                <Route path="/rm" exact component={ChooseMovie} />
                <Route path="/rms" exact component={ChooseMusic} />
            </Layouts>
        )
    }
};

export default Page;

