import React from 'react';
import Menu from './menu/menu';
import Backdrop from '../../../../components/backdrop/backdrop';
import Aux from '../../../aux/aux';
import classes from './sidebar.css';


const sidebar = (props) => {
    return (
        <Aux>
            <div className={classes.sidebar}
                style={props.show? {display:"block"}:{display:"none"}}>
                <p className={classes.title}>RANDOM BOY</p>
                <Menu
                    menu={props.menu}
                    click={props.menuChoose}
                    show={props.show} />
            </div>
            <Backdrop 
                show={props.show} 
                click={props.clickBack} />
        </Aux>
    )
};

export default sidebar;