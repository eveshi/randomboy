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
        console.log(page);
        const movieList = this.callApi(page);
        console.log(movieList)
        const order = number - page;
        console.log(order)
        this.setState({
            movieList: movieList,
            order: order
        })

    }

    componentDidUpdate (nextProps,nextState) {
        const movieList = this.state.movieList;
        const listNew = nextState.movieList;
        if(movieList.arrayTitle && movieList !== listNew){
            console.log("i'm updating")
            const name = movieList.arrayTitle[this.state.order];
            console.log(name)
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
        console.log(response.data)
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
                <button onClick={this.clickHandler} >电影摇一摇咯</button>
            </div>
        )
    }
};

export default ChooseMovie;