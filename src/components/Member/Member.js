
import { useState } from 'react';
import './Member.css'

const Member = (props) => {
    const [disabled, setDisabled] = useState(false);

    // selected condition
    const add = " Add to Member";
    const added = "Already Added";
    const selected = () => {
        if (disabled === false) {
            return add;
        } else {
            return added;
        }
    }

    /* destructuring */
    const { img, name, designation, email, batch_BCS, salary } = props.member;


    return (

        /* members cart */

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
                <button disabled={disabled} className="handleAddToCart" onClick={() => {
                    props.handleAddToCart(props.member);
                    setDisabled(true);

                }}><i className="fas fa-user-plus"></i> {selected()}</button>
                <div>
                    {/* Cart icon */}
                    <i className="fab fa-facebook-square cart-icon"></i>
                    <i className="fab fa-twitter-square cart-icon"></i>
                    <i className="fab fa-linkedin cart-icon"></i>
                </div>
            </div>
        </div>
    );
};

export default Member;