import React from 'react';
import Toolbar from '../../containers/Toolbar/toolbar';

const Layouts = (props) => {
    return (
        <div>
            <Toolbar />
            {props.children}
        </div>
    )
};

export default Layouts;