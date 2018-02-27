import React, { Component } from 'react';
import axios from 'axios';

class ChooseMovie extends Component {
    state = {
        movieNumber: null,
        movieName: 'noData',
        page: null,
    }

    clickHandler = () => {
        let number = Math.floor(Math.random()*100);
        let page = Math.ceil(number/25)*25;
        this.setState({
            movieNumber: number,
            page: page,
        });
    }

    componentDidUpdate () {
        axios.get('https://www.douban.com/doulist/105743/?start=' + this.state.page + '&sort=time&sub_type=')
            .then(response => {
                console.log(response.data)
            })
    }

    render () {
        return (
            <div>
            <p>{this.state.movieName}</p>
            <button onClick={this.clickHandler} >电影摇一摇咯</button>
            </div>
        )
    }
};

export default ChooseMovie;