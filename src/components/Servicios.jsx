import React from 'react';
import tijera from '../assets/tijera.png';
import navaja from '../assets/navaja.png';
import silla from '../assets/silla.png';

const Servicios = () => {
    return (
      <div className='bg-slate-400 mt-8'>
          <div className='space-y-4 w-fit mx-auto text-center p-4'>
          <h2 className='text-2xl text-black font-semibold'>
           Nuestros Servicios
          </h2>
  
          <p className=' text-black'>
              Ademas en nuestras instalaciones contamos con 
          <br/>
              un amplio rango de servicios para hacer de su 
              estadia, un momento agradable y seguro.
          </p>
          
          </div>
      <div className='grid gap-10 md:grid-cols-3 md:gap-4 pt-8 pb-10'>
          <div className='space-y-3 text-center'>
            <img className="mx-auto" src={tijera} alt="tijera" width={70} height={70}/>
            <p className='font-bold'>Corte de Cabello</p>
            <p className='ml-4 px-6 text-justify'>Corte de cabello con lavado incluido
            y terminaciones a navaja.
            </p>
          </div>
          <div className='space-y-3 text-center'>
            <img className='mx-auto' src={navaja} alt="navaja" width={70} height={70}/>
            <p className='font-bold'>Arreglo de barba</p>
            <p className='px-6 text-justify'>Afeitada tradicional o recorte de barba.
              Contamos con el servicio de toalla caliente.
            </p>
          </div>
          <div className='space-y-3 text-center'>
            <img className='mx-auto' src={silla} alt='silla' width={70} height={70}/>
            <p className='font-bold'>Corte de niños</p>
            <p className='px-6 mr-4 text-justify'>En Colo Styles estamos a la vanguardia
              en los ultimos cortes de moda.
            </p>
          </div>
      </div>
      </div>
    )
  }

  export default Servicios