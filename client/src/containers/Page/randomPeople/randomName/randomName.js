import React from 'react';
import NameList from './nameList/nameList';
import Aux from '../../../../hoc/aux/aux';

const randomName = (props) => {
    console.log(props.input)
    console.log(props.output)

    return (
        <Aux>
            <input type="text" onKeyPress={props.enterKey} onChange={props.changeName} value={props.name} />
            <NameList nameList={props.input} />
            <button onClick={props.newOrder}>Submit</button>
            <NameList nameList={props.output} />
        </Aux>
    )
};

export default randomName;