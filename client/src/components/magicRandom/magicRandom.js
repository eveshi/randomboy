import React from 'react';

const magicRandom = (props) => {
    return <button onclick={props.click}>{props.caption}</button>
}

export default magicRandom;