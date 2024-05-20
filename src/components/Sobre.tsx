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
        <div id='sobre' className="h-full flex flex-col items-center py-12 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto py-12">
                <div className="text-center mb-12">
                    <h1 className="text-white text-3xl lg:text-4xl mb-4">Sobre Nós</h1>
                    <p className="text-lg text-gray-600">Conheça mais sobre nossa história e o que oferecemos.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="col-span-1 lg:col-span-2 mb-4">
                        <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
                            <Image src={cards[0].imagem} alt={cards[0].titulo} width={400} height={250} />
                            <h2 className="text-xl font-semibold mt-4">{cards[0].titulo}</h2>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
                            <Image src={cards[1].imagem} alt={cards[1].titulo} width={400} height={250} />
                            <h2 className="text-xl font-semibold mt-4">{cards[1].titulo}</h2>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
                            <Image src={cards[2].imagem} alt={cards[2].titulo} width={400} height={250} />
                            <h2 className="text-xl font-semibold mt-4">{cards[2].titulo}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sobre;