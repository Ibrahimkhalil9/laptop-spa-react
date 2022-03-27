import React from 'react';
import './SingleCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const SingleCart = ({ cart }) => {
    const { img, name, price } = cart
    return (
        <div className='SingleCart-container'>
            <img src={img} alt="" />
            <div className="informs">
                <h4>{name}</h4>
                <h5>Price: $ {price}</h5>
            </div>
            <button className='btn-style'><p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default SingleCart;