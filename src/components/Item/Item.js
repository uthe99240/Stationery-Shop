import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Item = (props) => {

    const { id, name, price, img } = props.item;
    const {handleAddToCart} = props;

    // console.log(props.item);
    return (
        <div className='border-2 rounded m-5 border-black relative h-96'>
            <div className='p-5 '>
                <img className='w-96 h-64' src={img} alt='' />
                <h1 className='text-3xl font-semibold pt-2 text-center '>{name}</h1>
            </div>

            <div className='bg-gray-300 p-2 absolute  bottom-0 w-full flex justify-center items-center space-x-5'>
                <button onClick={() => handleAddToCart(props.item)}>
                    Add To Cart
                </button>
                <FontAwesomeIcon icon={faShoppingCart} />               
            </div>
        </div>
    );
};

export default Item;