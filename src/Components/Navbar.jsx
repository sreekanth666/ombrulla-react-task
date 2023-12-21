import React, { useState } from 'react'
import './CSS/style.css'


function Navbar() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };
    const [toggleMobileDrawer1, setToggleMobileDrawer1] = useState(false)
    const [toggleMobileDrawer2, setToggleMobileDrawer2] = useState(false)
    return (
        <div className="py-4 md:mx-12 mx-5" data-testid="navbar-component">
            <nav className="flex items-center justify-between md:mx-12 relative">
                <div class="logo">
                    <img src="https://www.ombrulla.com/logo.svg" alt="Ombrulla Logo" class="cursor-pointer h-8 md:h-8" />
                </div>

                {/* Hamburger Icon for Mobile */}
                <button className="flex md:hidden" onClick={toggleDrawer} style={{ zIndex: 2 }} >
                {!isDrawerOpen ? (
                    <i className="fa-solid fa-bars text-3xl text-blue-600"></i>
                ) : (
                    <i className="fa-solid fa-xmark text-4xl text-blue-600"></i>
                )}{" "}
                </button>
                <div className={`md:hidden ${ isDrawerOpen ? "block" : "hidden" } fixed top-0 left-0 h-full mobile-menu`} style={{ zIndex: 100, backgroundColor: "white", width: "70%" }} >

                    {/* Side Drawer Content */}
                    <div className="flex items-center justify-center border-b-2 " style={{ backgroundColor: "#f3f4f6", height: "100px" }} >
                        <img src="https://www.ombrulla.com/logo.svg" alt="Ombrulla Logo" class="cursor-pointer h-8 md:h-8" />
                    </div>
                    <ul class="nav-list pl-4">
                        <li class="mb-4 border-b p-3"><a href="#">Home</a></li>
                        <li class="mb-4 border-b flex justify-between p-3">
                            <a href="#">Services</a>
                            <div class="mr-4 w-[1.5rem] h-[1.5rem] bg-[#004eff] rounded-full flex item-center justify-center text-white">
                                <i class="bi bi-plus" onClick={() => setToggleMobileDrawer1(!toggleMobileDrawer1)}></i>
                            </div>
                        </li>
                        {
                            toggleMobileDrawer1 &&
                            <ul class="ml-4">
                                <li class="mb-2">AI Visual Inspection</li>
                                <li class="mb-2">AI Infrastructure Inspection</li>
                                <li class="mb-2">AI People Tracking</li>
                                <li class="mb-2">AI Data Analytics</li>
                            </ul>
                        }
                        <li class="mb-4 border-b flex justify-between p-3">
                            <a href="#">Product</a>
                            <div class="mr-4 w-[1.5rem] h-[1.5rem] bg-[#004eff] rounded-full flex item-center justify-center text-white">
                                <i class="bi bi-plus" onClick={() => setToggleMobileDrawer2(!toggleMobileDrawer2)}></i>
                            </div>
                        </li>
                        {
                            toggleMobileDrawer2 &&
                            <ul class="ml-4">
                                <li class="mb-2">Asset Performance Management</li>
                            </ul>
                        }
                        <li class="mb-4 border-b p-3"><a href="#">About</a></li>
                        <li class="mb-4 border-b p-3"><a href="#">Blog</a></li>
                        <li class="mb-4 p-3"><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="hidden md:flex space-y-4 md:space-x-9 md:space-y-0 z-5 z-40">
                    <ul class="nav-list hidden md:flex font-bold whitespace-no-wrap">
                        <li class="mx-4 cursor-pointer selected">Home</li>
                        <li class="mx-4 relative group">
                            <span class="cursor-pointer">Services <i class="fa-solid fa-chevron-down"></i></span>
                            <ul class="bg-white absolute hidden group-hover:block mt-3 py-2 whitespace-no-wrap w-60">
                                <li class="cursor-pointer px-4 py-2 border-b">AI Visual Inspection</li>
                                <li class="cursor-pointer px-4 py-2 border-b">AI Infrastructure Inspection</li>
                                <li class="cursor-pointer px-4 py-2 border-b">AI People Tracking</li>
                                <li class="cursor-pointer px-4 py-2">AI Data Analytics</li>
                            </ul>
                        </li>
                        <li class="mx-4 relative group">
                            <span class="cursor-pointer">Product <i class="fa-solid fa-chevron-down"></i></span>
                            <ul class="bg-white absolute hidden group-hover:block mt-3 py-2 whitespace-no-wrap w-72">
                                <li class="cursor-pointer px-4 py-2">Asset Performance Management</li>
                            </ul>
                        </li>
                        <li class="cursor-pointer mx-4">About</li>
                        <li class="cursor-pointer mx-4">Blog</li>
                        <li class="cursor-pointer mx-4">Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar