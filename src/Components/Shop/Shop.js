import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('fakeDB.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div className='shop-container'>
            <div className='products-section'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Order Summery</h2>
                <Cart

                ></Cart>
            </div>
        </div>
    );
};

export default Shop;