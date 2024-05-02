import React, {
    useState,
    useEffect,
    useContext
} from "react";
import { cartcontext } from "../App";
import { MdAddShoppingCart } from "react-icons/md";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

const App = ({
    product,
  
}) => {
    const { cart, setCart } =
        useContext(cartcontext);
    const [showToast, setShowToast] =
        useState(false);

    const [button, setButton] =
        useState(true);

    useEffect(() => {
        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );
    }, [cart]);

    const addToCart = () => {
        setShowToast(true);
        if (
            cart.every(
                prod =>
                    prod._id !==
                    product._id
            )
        ) {
            setCart(prevCart => [
                ...prevCart,
                { ...product, count: 1 }
            ]);
        }

        setTimeout(() => {
            setShowToast(false);
        }, 3000); // 3000
    };

    const removeFromCart = () => {
        const updatedCart = cart.filter(
            prod =>
                prod._id !== product._id
        );
        setCart(updatedCart);
        setButton(true);
    };

    return (
        <div className="w-fit p-2 shadow-x rounded-lg">
            {showToast && (
                <div className="bg-green-500 text-white py-2 px-4 rounded fixed top-[10%] left-0 right-0 w-3/4 md:w-1/2 mx-auto">
                    <p class="text-white text-center">
                        Item added to
                        cart
                    </p>
                </div>
            )}
            <div className=" rounded-md p-4 bg-slate-100">
                <img
                    className="object-contain w-full h-full"
                    src={
                        product.imageurl
                    }
                    alt={
                        product.product
                    }
                />
            </div>
            <div className=" mt-2 capitalize ">
                <div class="flex justify-between items-center">
                    <div class="">
                        <p className="font-mediu text-lg">
                            {
                                product.name
                            }
                        </p>
                        <p className="mt-2">
                            <span>
                                ₹{" "}
                            </span>
                            {
                                product.price
                            }
                        </p>
                    </div>
                    <button
                        class=""
                        onClick={
                            addToCart
                        }
                    >
                        <MdAddShoppingCart className="size-7 text-accent" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
