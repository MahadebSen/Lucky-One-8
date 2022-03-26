import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price: ${price}</p> 
            <button className='cart-btn'>Add to cart <FontAwesomeIcon icon={faCartPlus}/></button>
        </div>
    );
};

export default Product;