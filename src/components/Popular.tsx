'use client';

import Image from 'next/image';
import { StaticImageData } from 'next/image';
import banner from '@/assets/banner.png';

interface LocalProps {
    nome: string;
    imagem: StaticImageData;
    preco: string;
}

const carros: LocalProps[] = [
    {
        nome: 'Audi A4 Comum',
        imagem: banner,
        preco: 'R$ 1.200',
    },
    {
        nome: 'Audi R8 Esportivo',
        imagem: banner,
        preco: 'R$ 5.000',
    },
    {
        nome: 'Audi Q7 Esportivo',
        imagem: banner,
        preco: 'R$ 4.000',
    },
];

const Carros = () => {
    return (
        <div id='carros' className="h-screen flex justify-center items-center mb-12 lg:mb-0 py-12 px-4 md:px-8 lg:px-16 bg-cover bg-center" style={{ backgroundImage: "url('/alugar.png')" }}>
            <div className="container mx-auto py-12">
                <div className="flex justify-between items-center px-5 lg:px-20">
                    <h1 className="text-white text-3xl lg:text-4xl lg:mb-4">Especiais de Hoje</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {carros.map((local, index) => (
                        <div key={index} className="px-2 py-2 pb-4 relative">
                            <div className="bg-gray-custom flex flex-col justify-center items-center p-4 overflow-hidden">
                                <Image src={local.imagem} alt={local.nome} width={400} height={250} />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-semibold text-white mb-2">{local.nome}</h3>
                                    <div className="flex items-center justify-center mb-2">
                                        <h4 className='text-lg text-gray-500'>Ano 2024</h4>
                                    </div>
                                    <div className="flex items-center justify-center gap-6">
                                        <p className="text-xl text-yellow-custom2">{local.preco} <span className='text-gray-500'>/ Dia</span></p>
                                        <button className="text-xl text-yellow-custom2">
                                            Teste Drive
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

export default Carros;
