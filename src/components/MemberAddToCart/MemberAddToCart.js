import React from 'react';
import './MemberAddToCart.css'

const MemberAddToCart = (props) => {
    const { cart } = props;
    const totalReducer = (previous, member) => previous + member.salary;
    const total = cart.reduce(totalReducer, 0);


    let totalName = [];
    for (const name of cart) {
        totalName.push(name.name)

    }


    return (
        <div className='member-add-card'>
            <div className='count-container'>
                <h4 className="members-count"><i class="fas fa-user-tie"></i> Member Added: {cart.length}</h4>
                <h5 className='total-cost'>Total Cost: {total}</h5>
            </div>
            <ol>
                {
                    totalName.map(name => <DisplayName name={name}></DisplayName>)

                }
            </ol>
        </div>
    );
};

const DisplayName = (props) => {
    return (
        <div>
            <li>{props.name}</li>
        </div>
    )
}

export default MemberAddToCart;