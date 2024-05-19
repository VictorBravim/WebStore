// Hero.tsx              <Image src={banner1} alt="Texto" width={1200} height={32} />                    <Image src={text} alt="Texto" width={600} height={32} />
import Image from "next/image";
import text from '@/assets/text.webp'
import banner1 from '@/assets/banner1.webp'

export default function Hero() {
    return (
        <div id="home" className="h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-16 lg:pt-0 pt-12">
            <div className="relative z-10 text-white w-full lg:w-1/3">
                <div className="text-left mb-4">
                    <p className="text-sm md:text-xl text-gray-custom font-bold mb-4 pr-0 lg:pr-20">TrueVR é a próxima evolução do mundo de realidade virtual. Nossa visão é ajudar a conectar todas as pessoas do mundo, eliminando distância e tempo. Comece sua aventura agora mesmo, juntos.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    <button className="bg-green-neon text-black text-2xl font-bold py-3 mb-6 lg:mb-0 px-12 rounded swv">
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
            </div>
        </div>
    );
}
