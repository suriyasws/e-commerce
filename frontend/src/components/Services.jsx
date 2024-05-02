import React from "react";
import ser1 from "./images/services1.svg";
import ser2 from "./images/services2.svg";
import ser3 from "./images/services3.svg";
import ser4 from "./images/services4.svg";

const App = () => {
    return (
        <div class="bg-slate-200">
            <div class="container py-12 grid-cols-1 grid gap-12 md:grid-cols-2">
                <div class="">
                    <img
                        src={ser1}
                        alt=""
                        class=""
                    />
                    <p class="text-lg font-medium mt-3 ">
                        Fast & Free
                        Delivery
                    </p>
                    <p class="text-gray-600 text-sm">
                        Free delivery on
                        all orders
                    </p>
                </div>
                <div class="">
                    {" "}
                    <img
                        src={ser2}
                        alt=""
                        class=""
                    />
                    <p class="text-lg font-medium mt-3 ">
                        Secure Payments
                    </p>
                    <p class="text-gray-600 text-sm">
                        Lorem ipsum
                        dolor sit amet,
                        consectetur
                        adipisicing
                        elit. Ut, ipsum!
                    </p>
                </div>
                <div class="">
                    {" "}
                    <img
                        src={ser3}
                        alt=""
                        class=""
                    />
                    <p class="text-lg font-medium mt-3 ">
                        Moneyback
                        Gurantee
                    </p>
                    <p class="text-gray-600 text-sm">
                        Lorem ipsum
                        dolor sit amet,
                        consectetur
                        adipisicing
                        elit.
                    </p>
                </div>
                <div class="">
                    {" "}
                    <img
                        src={ser4}
                        alt=""
                        class=""
                    />
                    <p class="text-lg font-medium mt-3 ">
                        Online Support
                    </p>
                    <p class="text-gray-600 text-sm">
                        Lorem ipsum
                        dolor sit amet,
                        consectetur
                        adipisicing
                        elit. Magnam,
                        nostrum porro
                        at?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default App;
