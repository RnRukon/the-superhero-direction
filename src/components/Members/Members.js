import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';
import MemberAddToCart from '../MemberAddToCart/MemberAddToCart';
import './Members.css';

const Members = () => {

    const [members, setMembers] = useState([]);
    const [cart, setCart] = useState([]);





    // JSON data convert
    useEffect(() => {
        fetch('./FakeData.JSON')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, []);

    // add to cart event handler

    const handleAddToCart = (member) => {
        const newCart = [...cart, member];
        setCart(newCart);
    };
    return (
        <div className='members-container'>
            <div className='members-cart'>
                {
                    members.map(member => <Member key={member.key} member={member} handleAddToCart={handleAddToCart}></Member>)
                };
            </div>

            <div>
                <MemberAddToCart cart={cart}></MemberAddToCart>
            </div>
        </div>
    );
};

export default Members;