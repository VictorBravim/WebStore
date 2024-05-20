// Sobre.tsx
'use client';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import banner from '@/assets/banner.png';

interface CardProps {
    titulo: string;
    imagem: StaticImageData;
}

const cards: CardProps[] = [
    {
        titulo: 'Card Superior',
        imagem: banner,
    },
    {
        titulo: 'Card Inferior Esquerdo',
        imagem: banner,
    },
    {
        titulo: 'Card Inferior Direito',
        imagem: banner,
    },
];

const Sobre = () => {
    return (
        <div id='about' className="h-full flex flex-col items-center py-12 px-56">
            <div className="container mx-auto py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="col-span-1 lg:col-span-2 mb-4">
                        <div className="bg-red-custom p-6 shadow-lg rounded-lg flex flex-row justify-center items-center">
                            <div className="w-1/2 flex flex-col text-left mb-4">
                                <h1 className="text-9xl font-bold text-white mb-2">Air Jordan 6 <br /> Retro SP</h1>
                                <span className="text-5xl mb-2">UPTO 60% OFF</span>
                                <button className="bg-blue-custom text-white text-xl font-bold py-2 mb-6 lg:mb-0 px-6 rounded">
                                    ADD TO CART
                                </button>
                            </div>
                            <Image src={cards[0].imagem} alt={cards[0].titulo} width={600} height={250} />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-blue-custom p-6 shadow-lg rounded-lg flex flex-col items-center">
                            <Image src={cards[1].imagem} alt={cards[1].titulo} width={400} height={250} />
                            <h2 className="text-xl font-semibold mt-4">{cards[1].titulo}</h2>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
                            <h2 className="text-xl font-semibold mt-4">{cards[2].titulo}</h2>
                            <Image src={cards[2].imagem} alt={cards[2].titulo} width={400} height={250} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sobre;