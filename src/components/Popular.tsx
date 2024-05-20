// Popular.tsx
'use client';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import banner from '@/assets/banner.png';

interface LocalProps {
    nome: string;
    imagem: StaticImageData;
    preco: string;
}

const popular: LocalProps[] = [
    {
        nome: 'Air Jordan 6',
        imagem: banner,
        preco: '$1,200',
    },
    {
        nome: 'Air Jordan 6',
        imagem: banner,
        preco: '$1,200',
    },
    {
        nome: 'Air Jordan 6',
        imagem: banner,
        preco: '$1,200',
    },
];

const Popular = () => {
    return (
        <div className="h-full flex justify-center items-center py-12 px-56 bg-cover bg-center" style={{ backgroundImage: "url('/bg2.png')" }}>
            <div className="container mx-auto py-12">
                <div className="flex justify-between items-center px-2">
                    <h1 className="text-white text-3xl lg:text-4xl lg:mb-4">Popular Products</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {popular.map((local, index) => (
                        <div key={index} className="px-2 py-2 pb-4 relative">
                            <div className="bg-blue-custom flex flex-col justify-center items-center p-4 overflow-hidden rounded-lg">
                                <Image src={local.imagem} alt={local.nome} width={400} height={250} />
                                <div className="p-4 text-center">
                                    <h3 className="text-4xl text-white mb-2">{local.nome}</h3>
                                    <div className="flex items-center justify-center gap-6">
                                        <p className="bg-red-custom p-2 px-6 rounded-lg text-xl text-white">{local.preco}</p>
                                        <button className="bg-white p-2 px-4 rounded-lg text-xl text-black">
                                            ADD CART
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Popular;