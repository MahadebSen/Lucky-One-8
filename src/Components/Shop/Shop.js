import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('fakeDB.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);

    const handleCart = (item) => {
        const newArray = [...cart, item];
        setCart(newArray);
    }

    const itemDelete = () => {
        
    }

    const chooseAny = (arr) => {
        if (arr.length > 1){
        const newArr = [];
        const i = Math.round(Math.random() * arr.length);
        const newElement = arr[i]
        newArr.push(newElement);
        setCart(newArr);
        }
    }

    const clear = () => {
        setCart([])
    }

    return (
        <div className='shop-container'>
            <div className='products-section'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handler={handleCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Order Summery</h2>
                {
                    cart.map(item => <Cart
                        key={item.id}
                        item={item}
                        font={<FontAwesomeIcon icon={faTrash}/>}
                    ></Cart>)
                }
                <div>
                    <button onClick={() => chooseAny(cart)} className='cart-choose'>Choose One For Me</button>
                </div>
                <div >
                    <button onClick={clear} className='cart-clear'>Clear</button>
                </div>
                
            </div>
        </div>
    );
};

export default Shop;