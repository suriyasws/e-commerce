import React, {
    useState,
    useContext
} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { VscAccount } from "react-icons/vsc";
import { cartcontext } from "../App";


const Navbar = () => {
    const { cart } = useContext(
        cartcontext
    );

    const [menu, setMenu] =
        useState(false);
    const [show, setShow] = useState(1);
    const openMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className=" py-2 text-whit">
            <div className="container">
                <nav className=" flex justify-between items-center">
                    <div className=" flex items-center">
                        <button
                            className="mr-2 rounded w-fit md:hidden"
                            onClick={
                                openMenu
                            }
                        ></button>
                        <div className="font-bold text-xl  font-serif flex flex-col gap-0 justify-center items-center text-accent">
                            Furnitures
                            <div className="text-sm">
                                shop
                            </div>
                        </div>
                    </div>
                    <div class="space-x-8 txt-lg font-normal hidden md:block">
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
                                <HiOutlineShoppingBag className="size-5" />
                            </Link>
                            <span className=" absolute  -top-1/2 -right-1/2  bg-accent text-white rounded-full flex items-center justify-center text-sm text-center size-5">
                                {
                                    cart.length
                                }
                            </span>
                        </div>
                        <span className="">
                            <VscAccount className="size-5" />
                        </span>
                        <Link to="/searchresult">
                            <IoSearch className="size-5 font-bold" />
                        </Link>
                    </div>
                </nav>
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
