import React from "react";
import img from "./images/hero.png";

const App = () => {
    return (
        <div class="bg-zinc-200 ">
            <div class="container py-12 flex items-center  gap-6 flex-col md:flex-row">
                <div class="flex-[40%]">
                    <p class="text-4xl text-accent font-bold capitalize font-serif">
                        best furnitures
                        <br />
                        at best price
                    </p>
                    <p class="py-4">
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
                <div class="flex-[60%]">
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
