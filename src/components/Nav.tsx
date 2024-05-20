// Nav.tsx
'use client'
import { useState } from 'react';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    return (
        <nav className="bg-transparent lg:bg-background p-8 fixed w-full z-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center ml-0 lg:ml-8">
                    <h1 className='text-3xl font-bold text-white'>WebStore</h1>
                </div>
                <div className="md:flex space-x-6 lg:space-x-12 mt-4 md:mt-0">
                    <button className="text-white text-base md:text-lg" onClick={() => scrollToSection('home')}>Home</button>
                    <button className="text-white text-base md:text-lg" onClick={() => scrollToSection('product')}>Product</button>
                    <button className="text-white text-base md:text-lg" onClick={() => scrollToSection('about')}>About</button>
                    <button className="text-white text-base md:text-lg" onClick={() => scrollToSection('contact')}>Contact</button>
                </div>
                <button className="bg-none hidden lg:block text-white rounded-md text-base md:text-lg font-bold py-2 px-4 mt-4 md:mt-0 mr-0 lg:mr-8">
                    Sign up
                </button>
            </div>
        </nav>
    );
}