import React from 'react';
import './Member.css'

const Member = (props) => {
    const { img, name, designation, email, batch_BCS, salary } = props.member;
    return (
        <div className="member-cart">
            <div>
                <img className='member-img' src={img} alt="" />
            </div>
            <div>
                <h4 style={{ color: 'tomato' }}>{name}</h4>
                <p>Designation: {designation}</p>
                <h6>Email: {email}</h6>
                <h5>Batch(BCS): {batch_BCS}</h5>
                <h3>Salary: ৳{salary}</h3>
                <button className="handleAddToCart" onClick={() => props.handleAddToCart(props.member)}><i class="fas fa-user-plus"></i> Add to Member</button>
                <div>
                    <i class="fab fa-facebook-square cart-icon"></i>
                    <i class="fab fa-twitter-square cart-icon"></i>
                    <i class="fab fa-linkedin cart-icon"></i>
                </div>
            </div>
        </div>
    );
};

export default Member;