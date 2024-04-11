import React from "react";
import Products from "../components/Products";
import Hero from "../components/Hero.jsx";

const App = ({ cart, setCart }) => {
    return (
        <>
            <Hero />
            <Products
                cart={cart}
                setCart={setCart}
            />
        </>
    );
};

export default App;
