import React from 'react';
import './menu.css';

const menu = (props) => {
    return (
        <div>
            <button onClick={props.click} choose={props.choose} style={props.goodStyle} >{props.name}</button>
        </div>
    )
};

export default menu;