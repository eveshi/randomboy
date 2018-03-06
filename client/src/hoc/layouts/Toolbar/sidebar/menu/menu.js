import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from './menuItem/menuItem';
import classes from './menu.css';

const menu = (props) => props.menu.map((item) => {
        return (
            <NavLink 
            className={classes.submenu}
            to={'/'+item.id} key={item.id} >
                <MenuItem
                    click={(event) => props.click(event, item.id)}
                    name={item.name} />
            </NavLink>
        )
    })

export default menu;
