import React, { useState } from "react";
import {
    FaCartPlus,
    FaUserAlt,
    FaSearch
} from "react-icons/fa";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

const Navbar = ({ cart }) => {
    const [menu, setMenu] =
        useState(false);
    const [show, setShow] = useState(1);
    const openMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className="pt-4 pb-2 ">
            <div className="container">
                <nav className=" flex justify-between items-center">
                    <div className=" flex items-center">
                        <button
                            className="mr-2 rounded w-fit md:hidden"
                            onClick={
                                openMenu
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={
                                    1.5
                                }
                                stroke="currentColor"
                                className="size-7 stroke-2"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                        <div className="font-bold text-2xl text-accent font-serif flex flex-col justify-center items-center">
                            <span className="">Furnitures</span>
                            <span className="text-lg">Shop</span>
                        </div>
                    </div>
                    <div class="space-x-8 txt-lg font-medium hidden md:block">
                        <a
                            href=""
                            class=""
                        >
                            Home
                        </a>
                        <a
                            href=""
                            class=""
                        >
                            Products
                        </a>
                        <a
                            href=""
                            class=""
                        >
                            About Us
                        </a>
                        <a
                            href=""
                            class=""
                        >
                            Contact Us
                        </a>
                    </div>

                    <div className="flex space-x-4 lg:space-x-8 ">
                        <div className="relative">
                            <Link to="/viewcart">
                                <FaCartPlus className="size-5" />
                            </Link>
                            <span className=" absolute  -top-1/2 -right-1/2  bg-accent text-white rounded-full flex items-center justify-center text-sm text-center size-5">
                                {
                                    cart.length
                                }
                            </span>
                        </div>
                        <span className="">
                            <FaUserAlt className="size-5" />
                        </span>
                        <FaSearch className="size-5 " />
                    </div>
                </nav>

                <div className="md:hidden  mt-2 relative fixed">
                    <input
                        className="w-full outline-none pl-3 pr-10 h-8 rounded text-gray-800 text-sm"
                        type="search"
                        placeholder="Search for products, brands and more"
                    />
                    <button className=" bg-gray-300 absolute top-0 right-0  rounded text-gray-500 ">
                        <FaSearch className="p-1 size-8" />
                    </button>
                </div>
            </div>

            <div
                className={`fixed flex w-full h-dvh top-0  transition-all duration-300 ${
                    menu
                        ? "right-0 opacity-1"
                        : "right-full opacity-0"
                }`}
            >
                <div className="bg-bg w-2/3 md:w-1/3 ">
                    <div
                        className="bg-primary w-full h-16 relative"
                        onClick={
                            openMenu
                        }
                    >
                        <button className="absolute right-4 top-4 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={
                                    1.5
                                }
                                stroke="currentColor"
                                className="size-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col mt-8 space-y-6 capitalize text-left px-8">
                        <a
                            className={`${
                                show ==
                                1
                                    ? "text-third"
                                    : ""
                            }`}
                            onClick={() => {
                                setShow(
                                    1
                                );
                                openMenu();
                            }}
                            href="#home"
                        >
                            home
                        </a>
                        <a
                            className={`${
                                show ==
                                2
                                    ? "text-third"
                                    : ""
                            }`}
                            onClick={() => {
                                setShow(
                                    2
                                );
                                openMenu();
                            }}
                            href="#about"
                        >
                            about me
                        </a>
                        <a
                            className={`${
                                show ==
                                8
                                    ? "text-third"
                                    : ""
                            }`}
                            onClick={() => {
                                setShow(
                                    3
                                );
                                openMenu();
                            }}
                            href="#/*  */"
                        >
                            services
                        </a>
                        <a
                            className={`${
                                show ==
                                4
                                    ? "text-third"
                                    : ""
                            }`}
                            onClick={() => {
                                setShow(
                                    4
                                );
                                openMenu();
                            }}
                            href="#contact"
                        >
                            Contact
                        </a>
                    </div>
                </div>
                <div
                    className="bg-black bg-opacity-50 w-1/3 md:w-2/3"
                    onClick={openMenu}
                ></div>
            </div>
        </div>
    );
};

export default Navbar;
