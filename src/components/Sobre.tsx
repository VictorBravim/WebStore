// Sobre.tsx
'use client';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import banner2 from '@/assets/banner2.webp';
import jordan2 from '@/assets/jordan2.webp';
import jordan5 from '@/assets/jordan5.webp';

interface CardProps {
    titulo: string;
    imagem: StaticImageData;
}

const cards: CardProps[] = [
    {
        titulo: 'Card Superior',
        imagem: banner2,
    },
    {
        titulo: 'Card Inferior Esquerdo',
        imagem: jordan5,
    },
    {
        titulo: 'Card Inferior Direito',
        imagem: jordan2,
    },
];

const Sobre = () => {
    return (
        <div id='about' className="h-full flex flex-col items-center py-12 lg:px-56">
            <div className="container mx-auto py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="col-span-1 lg:col-span-2 mb-4">
                        <div className="bg-red-custom p-6 shadow-lg rounded-lg flex flex-col lg:flex-row justify-center items-center">
                            <div className="lg:w-1/2 flex flex-col text-left mb-4">
                                <h1 className="text-9xl font-bold text-white mb-2">Air Jordan 6 <br /> Retro SP</h1>
                                <span className="text-5xl mb-2">UPTO 60% OFF</span>
                            </div>
                            <Image src={cards[0].imagem} alt={cards[0].titulo} width={600} height={250} />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-blue-custom p-6 shadow-lg rounded-lg flex flex-col items-center">
                            <Image src={cards[1].imagem} alt={cards[1].titulo} width={500} height={250} />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
                            <Image src={cards[2].imagem} alt={cards[2].titulo} width={500} height={250} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sobre;