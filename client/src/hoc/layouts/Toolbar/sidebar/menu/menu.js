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

//知道了似乎应该全部改成不是button，或者查一下button的active属性