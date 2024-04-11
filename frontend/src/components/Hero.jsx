import React from "react";
import img from "./images/hero.png";

const App = () => {
    return (
        <div class="bg-zinc-200 ">
            <div class="container py-12 flex items-center  gap-6 flex-col md:flex-row">
                <div class="flex-1">
                    <p class="text-6xl text-accent font-bold capitalize font-serif">
                        best furnitures
                        <br />
                        at best price
                    </p>
                    <p class="py-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero modi distinctio possimus.
                        Lorem ipsum
                        dolor sit amet,
                        consectetur
                        adipisicing
                        elit. Odit
                        ipsum, labore at
                        facilis a
                        deserunt quo
                        officiis. Est.
                    </p>
                    <button class="px-4 py-2 bg-accent rounded-md text-white ">
                        Shop Now
                    </button>
                    <button class="px-4 py-2 border border-accent rounded-md text-accent ml-4">
                        Sign In
                    </button>
                </div>
                <div class="flex-1">
                    <img
                        src={img}
                        alt=""
                        class="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
