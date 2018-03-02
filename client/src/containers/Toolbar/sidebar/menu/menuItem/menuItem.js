import React from 'react';

const menuItem = (props) => {
    return (
        <div>
            <button 
            onClick={props.click} 
            className={props.itemClass} >
            {props.name}
            </button>
        </div>
    )
};

export default menuItem;