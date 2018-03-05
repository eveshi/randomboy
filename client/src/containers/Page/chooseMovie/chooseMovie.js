import React, { PureComponent } from 'react';
import axios from 'axios';
import classes from './chooseMovie.css';

class ChooseMovie extends PureComponent {
    state = {
        movieName: 'noData',
        movieList: [],
        order: null,
    }

    clickHandler = () => {
        let number = Math.floor(Math.random()*100);
        let page = Math.floor(number/25)*25;
        const movieList = this.callApi(page);
        const order = number - page;
        this.setState({
            movieList: movieList,
            order: order
        })

    }

    componentDidUpdate (nextProps,nextState) {
        const movieList = this.state.movieList;
        const listNew = nextState.movieList;
        if(movieList.arrayTitle && movieList !== listNew){
            const name = movieList.arrayTitle[this.state.order];
            this.setState({
                movieName: name
            })
        }
    }

    callApi = async(el) => {
        const response = await axios.get('http://localhost:5000/api/movielist',{
            params:{
                page: el
            }
        });
        const content = response.data;
        this.setState({
            movieList: content
        });
        return content;
    }

    render () {
        return (
            <div className={classes.content} >
                <p>{this.state.movieName}</p>
                <button onClick={this.clickHandler} >Random Movie</button>
            </div>
        )
    }
};

export default ChooseMovie;