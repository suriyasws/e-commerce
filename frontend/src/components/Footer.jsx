import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Column 1: About */}
                    <div>
                        <div className="font-bold text-xl  font-serif flex flex-col gap-0 justify-center items-center text-accent">
                            Furnitures
                            <div className="text-sm">
                                shop
                            </div>
                        </div>
                        <p className="text-sm mt-2">
                            Discover the
                            latest
                            trends in
                            furniture at
                            unbeatable
                            prices.
                        </p>
                    </div>
                    {/* Column 2: Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">
                            Quick Links
                        </h3>
                        <ul className="text-sm">
                            <li>
                                <a href="#">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Column 3: Customer Service */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">
                            Customer
                            Service
                        </h3>
                        <ul className="text-sm">
                            <li>
                                <a href="#">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Shipping
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Returns
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Customer
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Column 4: Connect */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">
                            Connect with
                            Us
                        </h3>
                        <ul className="text-sm">
                            <li>
                                Email:
                                info@example.com
                            </li>
                            <li>
                                Phone:
                                +1234567890
                            </li>
                            <li>
                                Follow
                                us on
                                social
                                media:
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="mr-2"
                                >
                                    Facebook
                                </a>
                                <a href="#">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Copyright */}
                <div className="mt-8 text-center text-sm">
                    &copy;{" "}
                    {new Date().getFullYear()}{" "}
                    Furniture Kingdom.
                    All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
