import React from 'react';
import MenuItem from './menuItem/menuItem';
import classes from './menu.css';

const menu = (props) => props.menu.map((item) => {
        return <MenuItem
        itemClass={item.choose?classes.choose:classes.notChoose}
        click={(event) => props.click(event, item.id)}
        key={item.id}
        name={item.name} />
    })

export default menu;