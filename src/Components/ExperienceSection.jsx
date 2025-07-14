import React from 'react';
import digital from "../assets/digital-ex.webp"
const ExperienceSection = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${digital})`
                }}
            >
            </div>

            <div className="relative z-10 min-h-screen flex items-end justify-start p-8 lg:p-16">
                <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition-all duration-300">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-3 leading-tight">
                            Crafting digital experiences
                        </h1>
                        <p className="text-gray-600 text-sm mb-6">
                            Join the elite ranks of sustained value creators
                        </p>
                        <p className="text-gray-600 text-sm mb-2">
                            Images from <span className=" underline underline-offset-4 cursor-pointer hover:text-gray-400 transition-colors">Freepik</span>
                        </p>
                    </div>
                    
                    <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 uppercase tracking-wide text-sm">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;