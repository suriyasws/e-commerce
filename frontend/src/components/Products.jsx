import React, { useEffect, useState } from 'react';
import Product from "./Product";
import axios from 'axios';

const App = ({setCart,cart}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:4000/getallproducts';
    axios.get(apiUrl)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className='container py-8'>
        <p className='text-xl mb-4 font-bold'>Explore</p>
         <div className='grid  md:grid-cols-3 gap-3 ' >              
        {
          products.map((product) => {
            return (
                <Product key={product._id} product={product} cart={cart} setCart={setCart}/>
            );
         })
        }
        </div>
      </div>
    </>
  );
};

export default App;