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
                    {name}

                </span>
                <img onClick={() => removeItem(key)} src="https://img.icons8.com/color/48/000000/cancel--v3.png" alt="" />
            </li>


        </div>
    );
};

export default DisplayName;