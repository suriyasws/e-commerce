import React, {
    useEffect,
    useState
} from "react";
import {
    FaCartPlus,
    FaUserAlt,
    FaSearch
} from "react-icons/fa";
import { furnitures } from "../components/Furnitures";
import Product from "../components/Product";

const App = ({ cart, setCart }) => {
    const [
        searchValue,
        setSearchValue
    ] = useState("");
    const [aq, setaq] = useState(
        "Your search results"
    );
    const [
        searchArray,
        setSearchArray
    ] = useState([]);
    const searchItem = () => {
        if (searchValue.trim() === "") {
            setSearchArray([]);
            return;
        }
        const filteredArray =
            furnitures.filter(item =>
                item.name
                    .toLowerCase()
                    .includes(
                        searchValue.toLowerCase()
                    )
            );
        setSearchArray(filteredArray);
        setaq("No results found");
    };
    return (
        <div class="container">
            <div classNameName="px-12 md:px-12">
                <div classNameName="">
                    {" "}
                    <div className=" mt-2 relative mx-auto  md:w-1/2 ">
                        <input
                            className="w-full outline-none pl-3 pr-10 h-10 rounded text-gray-800 text-sm border-2"
                            type="search"
                            placeholder="Search for products, brands and more"
                            onChange={e =>
                                setSearchValue(
                                    e
                                        .target
                                        .value
                                )
                            }
                        />
                        <button
                            className=" bg-accent absolute top-0 right-0  rounded text-white "
                            onClick={
                                searchItem
                            }
                        >
                            <FaSearch className="p-2 size-10" />
                        </button>
                    </div>
                    {searchArray.length >
                    0 ? (
                        <div className="grid md:grid-cols-2 gap-12 ">
                            {searchArray.map(
                                (
                                    product,
                                    index
                                ) => (
                                    <Product
                                        key={
                                            index
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
                                    />
                                )
                            )}
                        </div>
                    ) : (
                        <p class=" text-center mt-24">
                            {aq}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
