import React from 'react';
import women from "../assets/women.jpg"
import laptop from "../assets/laptop.jpg"
import design from "../assets/design.jpg"

const BrandValueSection = () => {
    return (
        <section id='brand'>
            <div className="min-h-screen bg-[#ddcfc6] flex items-center justify-center p-8">
                <div className="relative w-full max-w-5xl h-[600px]">

                    {/* Left upper Image  */}
                    <div className="absolute top-0 left-4 sm:left-10 md:left-16 w-52 sm:w-72 md:w-96 h-52 sm:h-72 md:h-96 overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            src={women}
                            alt="Woman working"
                            className="w-full h-full object-contain"
                        />
                    </div>


                    {/* Left bottom image  */}
                    <div className="absolute bottom-0 left-0 w-full max-w-[450px] h-48 sm:h-64 overflow-hidden  transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            src={laptop}
                            alt="Laptop with coffee"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                    </div>

                    {/* Right side Image  */}
                    <div className="absolute top-30 right-0 w-[430px] h-96 overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            src={design}
                            alt="Creative workspace"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                    </div>



                    {/* Center Card  */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="bg-black/90 backdrop-blur-sm py-6 px-6 border border-gray-700 hover:bg-black/95 transition-all duration-300 hover:scale-105 w-72 h-64">
                            <h2 className="text-white text-4xl font-bold text-center mb-3">Brand Values</h2>
                            <p className="text-gray-300 text-center leading-relaxed mb-6 text-sm">
                                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit mollit anim id est laborum.
                            </p>
                            <div className="text-center">
                                <p className="text-gray-400 text-sm mb-2">
                                    Images from <span className=" underline cursor-pointer hover:text-white transition-colors">Freepik</span>
                                </p>
                                <button className="bg-transparent border border-white text-white px-6 py-2 rounded text-xs font-medium hover:bg-white hover:text-black transition-all duration-300 tracking-wider">
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandValueSection;