import React from 'react'
import imagg from '../assets/imagg.png'
import Dash from '../components/Dash'

const Features = () => {
  return (
    <div>
        <div className='container max-w-5xl mx-auto px-4 py-2 md:mt-10'>
            <div className='flex flex-col-reverse lg:flex-row'>
                <div className='lg:pr-10 space-y-3'>
                    <div className='text-sm text-gray-400 font-medium'>BARBER SHOP</div>
                    <div className='text-2xl text-gray-600'>Colo Styles</div>
                    <div className='text-sm text-gray-400 font-medium mt-2'>En Colo Style nos dedicamos a mejorar tu imagen</div>
                    <div>
                        <p className='text-sm text-gray-400 font-medium mt-4'>Nuestro objetivo es brindar el mejor servicio</p>
                        <p className='text-sm text-gray-400 font-medium mt-4'>Queremos que en Colo Style sea tu lugar donde</p>
                        <p className='text-sm text-gray-400 font-medium mt-4'>mas alla de cambiar tu look puedas relajarte.</p>
                        <a href='' className='inline-flex items-center text-black bg-gray-400 hover:bg-gray-200 font-semibold px-3 py-2 rounded mt-6'>
                        Solicita un Turno
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ml-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                        </a>
                    </div>
                </div>
                <div className='flex-shrink-0 lg:ml-auto mb-5 lg:mb-0'>
                    <img src={imagg} alt='survey' width={400}/>
                </div>
            </div>
            <Dash />
        </div>
    </div>
  )
}

export default Features
