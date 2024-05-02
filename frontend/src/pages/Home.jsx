import React from "react";
import Products from "../components/Products";
import LikedProducts from "../components/LikedProducts";
import Hero from "../components/Hero";
import Best from "../components/Best";
import Gallery from "../components/Gallery";
import Services from "../components/Services";
import Footer from "../components/Footer";

const App = () => {
    return (
        <>
            <Hero />
            <LikedProducts />
            <Best />
            <Gallery />
            <Products />
            <Services />
            <Footer />
        </>
    );
};

export default App;
