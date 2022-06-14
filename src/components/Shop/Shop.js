import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';

const Shop = () => {

    const [items, setItems] = useState([]);
    const [carts, setCarts] = useState([]);
    const [random,setRandom] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const handleAddToCart = (item) => {
        const newCart = [...carts, item];
        setCarts(newCart);
    }

    const removeItem = () => {
        const newCart = [];
        setCarts(newCart);
        setRandom(newCart);
    }

    const generateRandomNumber = () => {
        const num = Math.floor((Math.random() * 4) + 1);
        setRandom(carts[num].name)
    }
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-3 bg-slate-500'>
                <div className='grid grid-cols-3'>
                    {
                        items.map(item => <Item key={item.id} item={item}
                            handleAddToCart={handleAddToCart}></Item>)
                    }
                </div>
            </div>
            <div className='bg-white px-8 pt-10'>
                <h1 className='text-3xl font-bold pb-5'>Selected Items </h1>
                {
                    carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                }
                <h2 className='flex items-center justify-center font-bold text-2xl'>{random}</h2>
                <div>
                    <button onClick={() => generateRandomNumber()} className='bg-green-500 mt-4 mb-2 text-2xl font-bold p-2 w-full'>Choose 1 For Me</button>
                    <br></br>
                    <button onClick={() => removeItem()} className='bg-red-500 text-2xl font-bold p-2 w-full'>Choose Again</button>
                </div>

            </div>
        </div>
    );
};

export default Shop;