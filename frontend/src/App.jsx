import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import ViewCart from "./pages/ViewCart";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  
  const[cart,setCart]=useState([]);
  
  return (
    <div className='text-[18px]'>

      
      <BrowserRouter>
      
        <Navbar cart={cart}/>
        
        <Routes>
          <Route path='/' element={<Home cart={cart} setCart={setCart}/>}  />
          
          <Route path='/searchresult' element={<SearchResult/>}  />
          
          <Route path='/viewcart' element={<ViewCart cart={cart} setCart={setCart}/>}/>
          
        </Routes>     
        
      </BrowserRouter>
   
    </div>
  );
};

export default App;