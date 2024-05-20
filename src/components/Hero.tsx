// Hero.tsx
'use client'
import { useState, useEffect } from "react";

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const backgroundImage = isMobile ? "/bg-mobile.png" : "/bg.png";

    return (
        <div id="home" className="h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-56 lg:pt-0 pt-12 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="relative z-10 text-white w-full lg:w-1/2">
                <div className="text-left mb-4">
                    <span className="text-5xl mb-2">$225</span>
                    <h1 className="text-7xl lg:text-9xl font-bold text-white mb-2"><span className='text-red-custom'>Air Jordan</span> 6 <br /> Retro WR</h1>
                    <p className="text-md lg:text-xl text-gray-custom font-bold mb-6 pr-0 lg:pr-36">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis ipsum nec metus pulvinar dignissim. Integer id aliquet est, non euismod mi. Sed vel massa ac ex vulputate consectetur vitae faucibus felis. Etiam finibus orci nec suscipit posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies neque quis quam gravida, id malesuada dolor pharetra.</p>
                </div>
                <button className="bg-red-custom text-white text-xl font-bold py-2 mb-6 lg:mb-0 px-6 rounded">
                    ADD TO CART
                </button>
            </div>
            <div className="w-full lg:w-1/2">
            </div>
        </div>
    );
}