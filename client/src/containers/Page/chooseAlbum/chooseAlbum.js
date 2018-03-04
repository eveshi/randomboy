import React, { Component } from 'react';
import axios from 'axios';

class ChooseAlbum extends Component {
    state={
        albumName: null,
        albumList: null,
        liOrder: null,
        page: null,
        order: null,
    }

    clickHandler = () => {
        let order = Math.floor(Math.random()*500);
        let page = 0;
        let liOrder = 0;
        if ( order < 250 ){
            page = Math.floor(order/25)*25
        }else{
            liOrder = 1;
            page = Math.floor((order-250)/25)*25
        }
        this.setState({
            order: order,
            liOrder: liOrder,
            page: page
        })
        this.callApi(liOrder,page);
    }

    componentWillUpdate( nextProps, nextState ){
        const albumList = this.state.albumList;
        const newList = nextState.albumList;
        const order = this.state.order;
        const liOrder = this.state.liOrder;
        const page = this.state.page;
        if( albumList && albumList !== this.state.albumList){
            const albumName = albumList[order-250*liOrder-page]
            this.setState({
                albumName: albumName,
            })
        }
    }

    callApi = async(liOrder, page) => {
        const response = await axios.get("localhost:5000/api/albumList",{
            params:{
                liOrder: liOrder,
                page: page
            }
        });
        const content = response.data
        this.setState({
            albumList: content,
        })
        //其实要问一下为什么return的话不能return出来那个值
    }

    render(){
        return(
            <div>
                <p>{this.state.albumName}</p>
                <button onClick={this.clickHandler}>Random Album</button>
            </div>
       )
   }
}

export default ChooseAlbum;