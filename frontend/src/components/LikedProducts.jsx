import React, {
    useEffect,
    useState
} from "react";
import Product from "./Product";
import axios from "axios";
import { furnitures } from "./Furnitures";

const App = () => {
    const [category, setCategory] =
        useState("bed");

    useEffect(() => {
        const apiUrl =
            "http://localhost:4000/getallproducts";
        axios
            .get(apiUrl)
            .then(response => {
                setProducts(
                    response.data
                );
            })
            .catch(error => {
                console.error(
                    "Error fetching data:",
                    error
                );
            });
    }, []);

    return (
        <>
            <div className="container py-8">
                <p className="text-3xl mb-2 font-bold text-center">
                    Products You May
                    Like
                </p>
                <p class="pt-2 mx-auto md:w-3/4 hidden">
                    Lorem ipsum dolor
                    sit amet,
                    consectetur
                    adipisicing elit.
                    Laboriosam nemo
                    excepturi laborum
                    provident nisi
                    officia esse, quae
                    similique dolores
                    officiis.
                </p>
                <div className="grid  md:grid-cols-2 gap-12 ">
                    {furnitures.map(
                        (
                            product,
                            index
                        ) => {
                            if (
                                index %
                                    2 !=
                                0
                            ) {
                                return (
                                    <Product
                                        key={
                                            index
                                        }
                                        product={
                                            product
                                        }
                                    />
                                );
                            }
                        }
                    )}
                </div>
            </div>
        </>
    );
};

export default App;
