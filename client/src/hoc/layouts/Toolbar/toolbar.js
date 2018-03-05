import React, { Component } from 'react';
import Sidebar from './sidebar/sidebar';
import Aux from '../../aux/aux';
import classes from './toolbar.css';
import icon from '../../../assets/images/menu.png'

class Toolbar extends Component {
    state = {
        menu: [
            { id: "rp", name: "Random Person", choose: null },
            { id: "rm", name: "Random Movie", choose: null },
            { id: "rms", name: "Random Music", choose: null },
        ],
        showSide: false,
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
    
        this.setState( (prevState) => ({
          menu: menu,
          showSide: ! prevState.showSide
        }));
    }

    showMenu = () => {
        this.setState( (prevState) => ({
            showSide: ! prevState.showSide
        }))
    }

    clickBack = () => {
        this.setState( (prevState) => ({
            showSide: ! prevState.showSide
        }))
    }

    render () {
        return (
            <Aux>
                <div className={classes.toolbar}>
                    <img src={icon} alt="icon" onClick={this.showMenu} />
                    <p>RANDOM BOY</p>
                </div>
                <Sidebar 
                    show={this.state.showSide}
                    menuChoose={this.menuChoose}
                    menu={this.state.menu}
                    clickBack={this.clickBack} />
            </Aux>
        )
    }
}

export default Toolbar;