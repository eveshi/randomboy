import React from 'react';
import "./person.css";

const person = (props) => {
    return (
        <div>
            <input type="number" onChange={props.change} value={props.person}/>
            <p>{Math.floor(Math.random()*props.person)}</p>
        </div>
    )
};

export default person;