import React from 'react';
import './One.css';

const One = () => {
    return (
        <div className='one'>
            <div>
                <hr />
            </div>
            <h3>1. How does React work?</h3>
            <p>In React, when we declare a component, React renders all of those components in actual DOM, which reflects in UI. With this, React also create a virtual DOM by those components. So when we change/update in one or, more than one component, React then creates another virtual DOM correspondingly. And after this, React compares those two virtual DOM and finds the part, where the changes have happened. And after finding, React, just change that part in virtual DOM. And re-render the actual DOM.</p>
            
        </div>
    );
};

export default One;