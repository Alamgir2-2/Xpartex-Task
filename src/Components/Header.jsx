import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from "../assets/logo.png"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // id for smooth scroll
    const navItems = [
        { name: 'Home', to: 'home' },
        { name: 'Portfolio', to: 'portfolio' },
        { name: 'Brand Value', to: 'brand' },
        { name: 'What We Do', to: 'what-we-do' },
        { name: 'Contact Us', to: 'contact' },
    ];

    return (
        <>
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link
                            to='home'
                            smooth={true}
                            duration={500}
                            offset={-60}
                            className='cursor-pointer'
                        >
                            <img src={logo} alt="" />
                        </Link>

                        <nav className="hidden lg:flex space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-60}
                                    className="cursor-pointer text-gray-700 hover:text-amber-500 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-gray-800 z-[9999]"
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            <div
                className={`lg:hidden fixed top-0 right-0 h-screen w-40 bg-gray-300 backdrop-blur-md text-black transform transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
            >
                <div className="flex flex-col space-y-6 px-6 pt-20 text-lg">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            offset={-60}
                            onClick={() => setIsMenuOpen(false)}
                            className="cursor-pointer hover:text-amber-400 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Header;
