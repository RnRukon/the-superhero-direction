import React from 'react';
import { removeFromDb } from '../../utilities/fakedb';
import DisplayName from './DisplayName';
import './MemberAddToCart.css'

const MemberAddToCart = (props) => {
    const { cart, setCart } = props;
    const totalReducer = (previous, member) => previous + member.salary;
    const total = cart.reduce(totalReducer, 0);

    const removeItem = (key) => {
        removeFromDb(key)
        // remove items
        const newCart = cart.filter(item => item.key !== key)
        setCart(newCart)
    }

    // add to cart
    return (
        <div className='member-add-card'>
            <div className='count-container'>
                <h4 className="members-count"><i className="fas fa-user-tie"></i> Member Added: {cart.length}</h4>
                <h5 className='total-cost'>Total Cost: ${total}</h5>
            </div>

            <ol>
                {
                    cart.map(item => <DisplayName item={item} removeItem={removeItem} key={item.key}></DisplayName>)
                }
            </ol>

        </div>
    );
};


export default MemberAddToCart;