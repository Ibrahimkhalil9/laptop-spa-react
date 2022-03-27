import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';
import './Cart.css'

const Cart = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])




    return (
        <div className='total-body'>
            <div className="cart-container">
                {
                    carts.map(cart => <SingleCart cart={cart} key={cart.id}></SingleCart>)
                }

            </div>
            <div className="only">
                <h1>Mi bat tu</h1>
            </div>

        </div>
    );
};

export default Cart;