import React from 'react';

const DisplayName = (props) => {
    const { name, img, key } = props.item;
    const { removeItem } = props;
    return (
        <div>
            <li style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 5px'
            }}>
                <img
                    width="30px"
                    height="30px"

                    style={{
                        borderRadius: '50%',
                        padding: "0px 5px"
                    }} src={img} alt="" />
                <span >
                    {name} <br />

                </span>

            </li>
            <button style={{ margin: '0px', backgroundColor: 'tomato', borderStyle: 'none', padding: '2px 10px', borderRadius: '5px' }} onClick={() => removeItem(key)}>Remove</button>
        </div>
    );
};

export default DisplayName;