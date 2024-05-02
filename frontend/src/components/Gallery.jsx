import React from "react";
import img1 from "./images/pexels-fotoaibe-1668860.jpg";
import img2 from "./images/pexels-mali-112474.jpg";
import img3 from "./images/pexels-maria-salazar-303506-879010.jpg";

const App = () => {
    return (
        <div class="bg-slate-100">
            <div class="container py-12">
                <p class="text-3xl font-bold text-center mb-4">
                    Explore Our Recent
                    Works
                </p>
                <p class="mx-auto md:w-3/4 mb-6">
                    Lorem ipsum dolor
                    sit amet,
                    consectetur
                    adipisicing elit.
                    Labore magni veniam
                    doloribus quam unde,
                    cupiditate.
                </p>
                <div class="flex gap-2 flex-col md:flex-row items-center justify-around">
                    <div class="flex-1">
                        <img
                            src={img1}
                            alt=""
                            class=""
                        />
                    </div>
                    <div class="flex-1">
                        {" "}
                        <img
                            src={img2}
                            alt=""
                            class=""
                        />
                    </div>
                    <div class="flex-1">
                        {" "}
                        <img
                            src={img3}
                            alt=""
                            class=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
