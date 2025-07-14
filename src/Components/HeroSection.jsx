import React from "react";
import device from "../assets/device-mocup.png"
import diagonal from "../assets/diagonal.png"
import { FaBullhorn } from "react-icons/fa";
import CreativeMind from "../assets/creative.png";
import { BiPalette, } from "react-icons/bi";
import { HiOutlineWindow } from "react-icons/hi2";
const HeroSection = () => {
    return (
        <div id="home">
            <section className="min-h-screen bg-[#ddcfc6] flex items-center justify-center p-8">
                <div className="max-w-5xl w-full relative h-96 mt-30 bg-white mr-40 flex flex-col md:flex-row ">

                    {/* Right side image section */}
                    <div className="absolute w-full">
                        <img
                            src={device}
                            alt="Device mocup"
                            className="w-80 absolute aspect-square -top-32 -right-25 z-30"
                        />

                        <img
                            src={diagonal}
                            alt="diagonal pettern"
                            className="absolute w-78 aspect-square -top-20 -right-10 z-20"
                        />
                        <div className="absolute w-70 h-108 -top-40 -right-40 bg-yellow-500 z-10">
                        </div>
                    </div>

                    {/* left side card section */}
                    <div className="absolute bottom-0 p-4 sm:p-6 md:p-8 max-w-full sm:max-w-md w-full sm:w-auto z-40">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                            We Create Websites
                        </h1>

                        <p className="text-gray-900 mb-4 sm:mb-8 leading-relaxed text-sm sm:text-base">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt.
                        </p>

                        <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-8">
                            Image from <span className="underline underline-offset-4 cursor-pointer hover:text-gray-400 transition-colors">Freepik</span>
                        </p>

                        <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 uppercase tracking-wide text-xs sm:text-sm">
                            View Portfolio
                        </button>
                    </div>

                </div>
            </section>


            <section className="bg-[#ddcfc6] py-16 px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Epic design and engineering
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
                        {/* Srategy card */}
                        <div className="p-4 h-64 flex flex-col items-center justify-center text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <img src={CreativeMind} alt="Creative Icon" className="w-6 h-6 object-contain" />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-2">STRATEGY</h3>

                            <p className="text-sm text-gray-600 px-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit moliam nunc justo sagittis suscipit ultrices.
                            </p>
                        </div>

                        {/* Barnding Card */}
                        <div className="bg-white p-4 h-64 flex flex-col items-center justify-center text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <FaBullhorn className="w-6 h-6 text-gray-700" />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-2">BRANDING</h3>

                            <p className="text-sm text-gray-600 px-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit moliam nunc justo sagittis suscipit ultrices.
                            </p>
                        </div>

                        {/* Development card */}
                        <div className="p-4 h-64 flex flex-col items-center justify-center text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <HiOutlineWindow className="w-6 h-6 text-gray-700" />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-2">DEVELOPMENT</h3>

                            <p className="text-sm text-gray-600 px-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit moliam nunc justo sagittis suscipit ultrices.
                            </p>
                        </div>

                        {/* Web design card */}
                        <div className="bg-amber-400 p-4 h-64 flex flex-col items-center justify-center text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <BiPalette className="w-6 h-6 text-gray-700" />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-2">WEB DESIGN</h3>

                            <p className="text-sm text-gray-600 px-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit moliam nunc justo sagittis suscipit ultrices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default HeroSection;
