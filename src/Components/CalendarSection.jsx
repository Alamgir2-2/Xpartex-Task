import React from 'react';
import calendar from "../assets/calender.avif"

const CalendarSection = () => {
    return (
        <section>
            <div className="min-h-screen relative">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: `url(${calendar})`
                    }}
                >
                </div>

                <div className="relative z-10 min-h-screen flex items-center justify-end px-6">
                    <div className="w-full max-w-sm space-y-4">
                        <div className=" p-4 hover:shadow-xl transition-all duration-300">
                            <h2 className="text-3xl font-semibold text-white mb-2">Construction and renovation projects</h2>
                            <p className="text-black text-sm leading-snug mb-2">
                                Sample Text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia magni tempora atque, incidunt nisi explicabo quasi enim esse, iure mollitia repellat consequuntur amet vel eveniet. Repellendus aliquid eaque vel praesentium placeat. Adipisci culpa ullam sed sequi aliquam! Error!                            </p>
                            <p className="text-black text-sm mb-4">
                                Images from <span className="underline underline-offset-4 cursor-pointer hover:text-gray-700 transition-colors">Freepik</span>
                            </p>
                            <button className="bg-transparent border border-white text-white px-6 py-2 rounded text-xs font-medium hover:bg-white hover:text-black transition-all duration-300 tracking-wider">
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CalendarSection;