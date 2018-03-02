import React from 'react';

const nameList = (props) => props.nameList.map( ( item ) => {
    return <p key={item.id}>{item.name}</p>
});

export default nameList;