import React from 'react';

const menuItem = (props) => {
    return (
            <button 
            onClick={props.click} 
            className={props.itemClass} >
            {props.name}
            </button>
    )
};

export default menuItem;