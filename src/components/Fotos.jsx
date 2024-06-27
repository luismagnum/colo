import React, { useState } from 'react';
import { TfiAngleDoubleLeft, TfiAngleDoubleRight} from "react-icons/tfi";
import { RxDotFilled } from "react-icons/rx";

const Fotos = () => {
    const slides = [
        {
            url:'https://media.istockphoto.com/id/626416508/es/foto/hipster-cliente-visita-peluquer%C3%ADa-para-caballeros.webp?b=1&s=170667a&w=0&k=20&c=0bu21QRNKg1AwtqIvpHHUV1rYIGaFviyGypLystbB4A=',title: 'corte',
        },
        {
            url:'https://media.istockphoto.com/id/1995711715/es/foto/close-up-barber-man-using-comb-and-scissors.webp?b=1&s=170667a&w=0&k=20&c=GsYiRA2xF6-bENWjnDzcord-EOau6F0CT0U9EG7ewJY=',title:'corte',
        },
        {
            url:'https://media.istockphoto.com/id/932956896/es/foto/retrato-frente-a-la-mitad-de-grave-concentrado-seguro-brutal-chic-guapo-atractivo-elegante.webp?b=1&s=170667a&w=0&k=20&c=iL2VNeHU6NWV_NiWNWZdCFU9qgSdxyDHuWNH8YbJD5g=',title:'corte',
        },
        {
            url:'https://media.istockphoto.com/id/1677718095/es/foto/joven-que-se-corta-el-pelo-en-una-barber%C3%ADa.jpg?s=612x612&w=0&k=20&c=rUN1owODUMfxQGKZUh52Lsv-Eco4gRTDfR8OrUzX1b8=',title:'corte',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    };

  return (
    <div className='max-w-[650px] h-[580px] w-full m-auto py-16 px-4 relative group'>
        <h2 className='text-center text-2xl text-gray-500 mb-8'>Galería de Cortes</h2>
        <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <TfiAngleDoubleLeft onClick={prevSlide} size={20}/>
        </div>
        <div  className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <TfiAngleDoubleRight  onClick={nextSlide} size={20}/>  
        </div>
        <div className='flex top-4 justify-center py-2'>
         {slides.map((slide, slideIndex )=>(
            <div className='text-2xl cursor-pointer' key={slideIndex} onClick={()=> goToSlide(slideIndex)}>
             <RxDotFilled />   
            </div>
         ))}
        </div>
    </div>
  );
};

export default Fotos
