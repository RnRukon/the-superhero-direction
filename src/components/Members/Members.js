import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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

    useEffect(() => {
        if (members.length) {
            const saveCart = getStoredCart();
            // console.log(saveCart)

            const storedCart = []
            for (const key in saveCart) {

                const addedMember = members.find(member => member.key === JSON.parse(key))

                storedCart.push(addedMember);
            }
            setCart(storedCart)
        }
    }, [members])


    // add to cart event handler

    const handleAddToCart = (member) => {
        const newCart = [...cart, member];
        setCart(newCart);
        // add to localStorage
        addToDb(member.key);



    };
    return (
        <div className='members-container'>
            <div className='members-cart'>
                {
                    members.map(member => <Member key={member.key} member={member} handleAddToCart={handleAddToCart}></Member>)
                };
            </div>

            <div>
                <MemberAddToCart cart={cart} setCart={setCart}></MemberAddToCart>
            </div>
        </div>
    );
};

export default Members;