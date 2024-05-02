import React, {
    useEffect,
    useContext
} from "react";
import Cart from "../components/Cart";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { cartcontext } from "../App";

const App = () => {
    const { cart,setCart } = useContext(
        cartcontext
    );

    const handlePayClick = async () => {
        const stripe = await loadStripe(
            "pk_test_51OTdCzSBfvGo9LExNoXbNf7r4UkToF2xr1BsebXVhLJPwMrki6rY57IeBPLFZfQ9UAAhEOZVKvOIHL6RVfjGaQLj00LcSu6fiG"
        );

        try {
            const response =
                await axios.post(
                    "http://localhost:4000/create-checkout-session",
                    {
                        items: cart
                    },
                    {
                        headers: {
                            "Content-Type":
                                "application/json"
                        }
                    }
                );

            if (
                response.status === 200
            ) {
                const { sessionId } =
                    response.data;
                console.log(sessionId);
                const { error } =
                    await stripe.redirectToCheckout(
                        {
                            sessionId
                        }
                    );

                if (error) {
                    console.error(
                        error
                    );
                }
            } else {
                console.error(
                    response.data
                );
            }
        } catch (error) {
            console.error(
                "Error:",
                error
            );
        }
    };
    const handleIncrement =
        productId => {
            const updatedCart =
                cart.map(product =>
                    product._id ===
                    productId
                        ? {
                              ...product,
                              count:
                                  product.count +
                                  1
                          }
                        : product
                );
            setCart(updatedCart);
        };
    const total = cart.reduce(
        (acc, product) =>
            acc +
            (product.price *
                product.count || 0),
        0
    );
    const handleDecrement =
        productId => {
            const updatedCart =
                cart.map(product =>
                    product._id ===
                    productId
                        ? {
                              ...product,
                              count: Math.max(
                                  (product.count ||
                                      0) -
                                      1,
                                  1
                              )
                          }
                        : product
                );
            setCart(updatedCart);
        };

    return (
        <>
            <div class="border-t-2 w-3/4 mx-auto mt-2"></div>
            {cart.length < 1 ? (
                <div className="h-dvh flex items-center justify-center">
                    <p className="font-bold text-xl">
                        Your cart is
                        empty
                    </p>
                </div>
            ) : (
                <div className="container pt-[99px] py-4">
                    {cart.map(
                        product => (
                            <Cart
                                key={
                                    product._id
                                }
                                product={
                                    product
                                }
                                cart={
                                    cart
                                }
                                setCart={
                                    setCart
                                }
                                onIncrement={() =>
                                    handleIncrement(
                                        product._id
                                    )
                                }
                                onDecrement={() =>
                                    handleDecrement(
                                        product._id
                                    )
                                }
                            />
                        )
                    )}
                    <div className="flex items-center justify-between">
                        <div className="font-bold text-xl">
                            Total: ₹
                            {total}
                        </div>
                        <button
                            className="bg-accent px-4  py-2 border rounded-md text-white font-bold "
                            onClick={
                                handlePayClick
                            }
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default App;
