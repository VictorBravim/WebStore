// Hero.tsx              <Image src={banner1} alt="Texto" width={1200} height={32} />                    <Image src={text} alt="Texto" width={600} height={32} />
'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import banner from '@/assets/banner.png'

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
        <div id="home" className="h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-48 lg:pt-0 pt-12 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="relative z-10 text-white w-full lg:w-1/2">
                <div className="text-left mb-4">
                    <h1 className="text-8xl font-bold text-white mb-2">Air Jordan 6 <br /> Retro SP</h1>
                    <p className="text-md text-gray-custom font-bold mb-6 pr-0 lg:pr-36">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at aliquam risus. Donec at nisl quis augue pretium tempor efficitur eget ex.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    <button className="bg-white text-black text-2xl font-bold py-3 mb-6 lg:mb-0 px-12 rounded swv">
                        Explorar
                    </button>
                    <button className="bg-none flex flex-row items-center text-white text-2xl font-bold py-3 px-10 rounded">
                        <div className="flex">
                            Mais
                        </div>
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
               <Image src={banner} alt="Texto" width={800} height={32} />
            </div>
        </div>
    );
}
