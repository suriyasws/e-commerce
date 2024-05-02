import React, { useState,useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";

const Cart = ({ product, cart,setCart, onIncrement, onDecrement }) => {
  
  const deleteFromCart = () => {
    const updatedCart = cart.filter((prod) => prod._id !== product._id);
    setCart(updatedCart);
  };

 
  
  return (
    <>
      <div className='mb-8 flex gap-8 items-center '>
        <div className='w-[20%]'>
          <img src={product.imageurl} alt={product.product} />
        </div>
        <div className='w-[60%] space-y-2 capitalize'>
          <div className='flex items-center justify-between'>
            <div className=''>
              <p className=''>{product.product}</p>
              <p className=''>₹ {product.price}</p>
            </div>
            <p className=''>₹ {product.count * product.price}</p>
          </div>
          <div className='flex items-center space-x-2'>
            <button
              className='px-3 py-1 bg-white rounded'
              onClick={onIncrement}
            >
              +
            </button>
            <input
              className='w-[20%] h-8 text-center'
              type='number'
              onChange={(e) => {
                setCount(
                  Math.min(Math.max(Number(e.target.value), 1), 5)
                );
              }}
              value={product.count}
            />
            <button
              className='px-3 py-1 bg-white rounded'
              onClick={onDecrement}
            >
              -
            </button>
          </div>
        </div>
        <div className='w-[20%]'>
          <MdDeleteForever
            className='size-7 text-red-600'
            onClick={deleteFromCart}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;