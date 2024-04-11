import React, { useState, useEffect } from "react";

const App = ({ product, setCart, cart }) => {
  const [button, setButton] = useState(true);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = () => {
    if (cart.every((prod) => prod._id !== product._id)) {
      setCart((prevCart) => [...prevCart, { ...product, count: 1 }]);
    }
    setButton(true);
  };

  const removeFromCart = () => {
    const updatedCart = cart.filter((prod) => prod._id !== product._id);
    setCart(updatedCart);
    setButton(false);
  };

  return (
    <div className='bg-white w-fit p-2 shadow-xl rounded-lg'>
      <div className='aspect-video rounded-lg'>
        <img className='object-contain w-full h-full' src={product.imageurl} alt={product.product} />
      </div>
      <div className='text-center mt-2 capitalize text-center'>
        <p>{product.product}</p>
        <p className='text-sm text-green-600 font-bold'>
          <span>rs </span>
          {product.price}
        </p>
        {button ? (
          <button
            onClick={addToCart}
            className='w-full rounded-md bg-cyan-700 hover:bg-thistry2 py-1 px-2 mt-2 text-white border border-gray-500 mr-3'
          >
            Add to cart
          </button>
        ) : (
          <button
            onClick={removeFromCart}
            className='w-full rounded-md bg-red-500 hover:bg-red-400 py-1 px-2 mt-2 text-white border border-gray-500 mr-3'
          >
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
};

export default App;