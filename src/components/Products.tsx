// Products.tsx
'use client'
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import jordan1 from '@/assets/jordan1.png';
import jordan2 from '@/assets/jordan2.png';
import jordan3 from '@/assets/jordan3.png';
import jordan4 from '@/assets/jordan4.png';


interface LocalProps {
    nome: string;
    imagem: StaticImageData;
    preco: string;
}

const Produtos = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const sliderRef = useRef<Slider>(null);

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const produtos: LocalProps[] = [
        {
            nome: 'Air Jordan 6',
            imagem: jordan1,
            preco: '$1,200',
        },
        {
            nome: 'Air Jordan 6',
            imagem: jordan2,
            preco: '$1,200',
        },
        {
            nome: 'Air Jordan 6',
            imagem: jordan3,
            preco: '$1,200',
        },
        {
            nome: 'Air Jordan 6',
            imagem: jordan4,
            preco: '$1,200',
        },
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        swipeToSlide: true,
        arrows: false,
        initialSlide: sliderIndex,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div id='product' className="h-full flex justify-center items-center mb-12 lg:mb-0 py-12 lg:px-56 bg-cover bg-center" style={{ backgroundImage: "url('/bg3.png')" }}>
            <div className="container mx-auto py-12">
                <div className="flex justify-between items-center px-2">
                    <h1 className="text-white text-3xl lg:text-4xl lg:mb-4">LATEST <span className='text-red-custom'>ARRIVALS</span></h1>
                </div>
                <Slider {...sliderSettings} ref={sliderRef}>
                    {produtos.map((local, index) => (
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
                </Slider>
            </div>
        </div>
    );
};

export default Produtos;