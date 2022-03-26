import React from 'react';
import './Two.css';

const Two = () => {
    return (
        <div className='two'>
            <h3>2. Props vs. State.</h3>
            <p>In React, firstly props are just read-only parts but, state can changeable. It can be asynchronous. <br/> Secondly, props can’t be modified but, state can be modified using <b>“this.setState”</b>.</p>
            
        </div>
    );
};

export default Two;