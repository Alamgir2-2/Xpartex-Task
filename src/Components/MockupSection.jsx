import React from 'react';
import mockup from "../assets/mockup.jpg";

const MockupSection = () => {
    return (
        <section>
            <div className="min-h-screen relative">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: `url(${mockup})`
                    }}
                >
                </div>

                <div className="relative z-10 min-h-screen flex items-center justify-end px-6">
                    <div className="w-full max-w-sm space-y-4">

                        <div className="bg-white/95 p-4 rounded-md shadow hover:shadow-xl transition-all duration-300">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Branding strategy</h3>
                            <p className="text-black text-sm leading-snug mb-2">
                                Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.
                            </p>
                            <p className="text-black text-sm">
                                Images from <span className="underline cursor-pointer hover:text-gray-700 transition-colors">Freepik</span>
                            </p>
                        </div>

                        <div className="bg-white/95 p-4 rounded-md shadow hover:shadow-xl transition-all duration-300">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Designing logos</h3>
                            <p className="text-black text-sm leading-snug mb-2">
                                Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="text-black text-sm">
                                Images from <span className="underline cursor-pointer hover:text-gray-700 transition-colors">Freepik</span>
                            </p>
                        </div>

                        <div className="bg-white/95 p-4 rounded-md shadow hover:shadow-xl transition-all duration-300">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Brand identity</h3>
                            <p className="text-black text-sm leading-snug mb-2">
                                Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="text-black text-sm">
                                Images from <span className="underline cursor-pointer hover:text-gray-700 transition-colors">Freepik</span>
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default MockupSection;
