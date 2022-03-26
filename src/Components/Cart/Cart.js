import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = (props) => {
    const {img, name, font} = props.item;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <p>{name}</p>
            <button>{<FontAwesomeIcon icon={faTrash}/>}</button>

        </div>
    );
};

export default Cart;