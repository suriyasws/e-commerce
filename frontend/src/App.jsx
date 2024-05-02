import React, {
    useState,
    createContext,
    useContext
} from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import ViewCart from "./pages/ViewCart";
import Account from "./pages/Account";
import Details from "./pages/Details";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

export const cartcontext =
    createContext();

const App = () => {
    const [cart, setCart] = useState(
        []
    );

    return (
        <div className="md:text-[18px] font-inter">
            <cartcontext.Provider
                value={{
                    cart,
                    setCart
                }}
            >
                <BrowserRouter>
                    <Navbar />

                    <Routes>
                        <Route
                            path="/furniture.html"
                            element={
                                <Home
                                    cart={
                                        cart
                                    }
                                    setCart={
                                        setCart
                                    }
                                />
                            }
                        />

                        <Route
                            path="/searchresult"
                            element={
                                <SearchResult
                                    cart={
                                        cart
                                    }
                                    setCart={
                                        setCart
                                    }
                                />
                            }
                        />
                        <Route
                            path="/product"
                            element={
                                <Details

                                />
                            }
                        />
                        <Route
                            path="/viewcart"
                            element={
                                <ViewCart
                                    cart={
                                        cart
                                    }
                                    setCart={
                                        setCart
                                    }
                                />
                            }
                        />

                        <Route
                            path="/user_account"
                            element={
                                <Account />
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </cartcontext.Provider>
        </div>
    );
};

export default App;
