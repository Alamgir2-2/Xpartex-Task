import React from 'react';
import computer from "../assets/computer.jpeg"
import mobile from "../assets/mobile.jpg"
import corporate from "../assets/corporate.jpg"
import mobile2 from "../assets/mobile2.jpg"
import responsive from "../assets/responsive.jpg"
import digital from "../assets/digital.jpg"

const PortfolioSection = () => {
    return (
        <>
            <section id='portfolio' className="bg-slate-800 py-16 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Portfolio
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Quam quisque id diam vel quam elementum. Vestibulum lectus mauris ultrices eros in
                            cursus turpis massa tincidunt. Pellentesque habitant morbi tristique senectus et netus.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        <div className="bg-white overflow-hidden group cursor-pointer transform transition-transform duration-300 hover:scale-105">
                            <div className="h-64 flex items-center justify-center relative overflow-hidden">
                                <img
                                    src={computer}
                                    alt="Website Design"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-4 h-20 flex items-center justify-center">
                                <h3 className="text-lg font-semibold text-gray-900 text-center">Website Design</h3>
                            </div>
                        </div>

                        {/* Mobile application card */}
                        <div className="bg-white cursor-pointer transform transition-transform duration-300 hover:scale-105">
                            <div className="h-64 flex items-center justify-center relative overflow-hidden">
                                <img
                                    src={mobile}
                                    alt="Mobile Application"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-4 h-20 flex items-center justify-center">
                                <h3 className="text-lg font-semibold text-gray-900 text-center">Mobile Application</h3>
                            </div>
                        </div>

                        {/* Corporate design card */}
                        <div className="bg-white cursor-pointer transform transition-transform duration-300 hover:scale-105">
                            <div className="h-64 flex items-center justify-center relative overflow-hidden">
                                <img
                                    src={corporate}
                                    alt="Mobile Application"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-4 h-20 flex items-center justify-center">
                                <h3 className="text-lg font-semibold text-gray-900 text-center">Mobile Application</h3>
                            </div>
                        </div>

                        {/* Mobile application card 2 */}
                        <div className="bg-white cursor-pointer transform transition-transform duration-300 hover:scale-105">
                            <div className="h-64 flex items-center justify-center relative overflow-hidden">
                                <img
                                    src={mobile2}
                                    alt="Mobile Application"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-4 h-20 flex items-center justify-center">
                                <h3 className="text-lg font-semibold text-gray-900 text-center">Mobile Application</h3>
                            </div>
                        </div>

                        {/* Resposive design card */}
                        <div className="bg-white cursor-pointer transform transition-transform duration-300 hover:scale-105">
                            <div className="h-64 flex items-center justify-center relative overflow-hidden">
                                <img
                                    src={responsive}
                                    alt="Mobile Application"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-4 h-20 flex items-center justify-center">
                                <h3 className="text-lg font-semibold text-gray-900 text-center">Mobile Application</h3>
                            </div>
                        </div>

                        {/* Digilat product card */}
                        <div className="bg-white cursor-pointer transform transition-transform duration-300 hover:scale-105">
                            <div className="h-64 flex items-center justify-center relative overflow-hidden">
                                <img
                                    src={digital}
                                    alt="Mobile Application"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-4 h-20 flex items-center justify-center">
                                <h3 className="text-lg font-semibold text-gray-900 text-center">Mobile Application</h3>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <p className="text-gray-400 text-sm">
                            Images from <span className="underline underline-offset-4 cursor-pointer hover:text-white transition-colors">Freepik</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioSection;