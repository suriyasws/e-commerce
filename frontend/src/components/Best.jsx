import React from "react";
import img from "./images/best.jpg";

const App = () => {
    return (
        <div class="">
            <div class="bg-accent">
                <div class="">
                    <img
                        src={img}
                        alt=""
                        class="md:h-[450px] w-full"
                    />
                </div>
                <div class="container py-12 text-white">
                    <p class="text-3xl font-bold uppercase py-4">
                        best furniture{" "}
                        <br />
                        manufacturer
                    </p>
                    <p class="">
                        Lorem ipsum
                        dolor sit amet,
                        consectetur
                        adipisicing
                        elit. Odio
                        tempora sed
                        delectus saepe
                        ipsam voluptatem
                        inventore
                        aliquam
                        consectetur cum
                        illo error
                        temporibus
                        numquam at fugit
                        ipsa soluta
                        consequuntur,
                    </p>
                    <button class="mt-4 px-4 py-2 bg-accent rounded-md border text-white">
                        Discover More{" "}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
