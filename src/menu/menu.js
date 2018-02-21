import React from 'react';
import './menu.css';

const menu = (props) => {
    return (
        <div>
            <button onClick={props.click}>{props.name}</button>
        </div>
    )
};

export default menu;