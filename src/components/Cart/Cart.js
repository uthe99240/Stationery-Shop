import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {

    const { name, img } = props.cart;
    return (
        <div>
            <div className='flex items-center bg-orange-500 mb-2 relative'>
                <div className='bg-black h-15 w-15 mr-4'>
                    <img className='h-12 w-12 p-1' src={img} alt="" />
                </div>
                <h1 className='text-2xl font-bold mr-8'>{name}</h1>
                <button className='absolute right-4'>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>

        </div>

    );
};

export default Cart;