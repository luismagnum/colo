import React from 'react'
import imagf from '../assets/imagf.png'
import imagb from '../assets/imagb.png'
import imagc from '../assets/imagc.png'
import imagd from '../assets/imagd.png'
import Dash from '../components/Dash'

const Graficas = () => {
  return (
    <div>
        <div className='max-w-5xl mx-auto px-4 z-10'>
            <h3 className='text-2xl text-gray-500 font-semibold text-center mt-8 mb-8'>Esto es lo que hacemos</h3>
            <div className='md:grid md:grid-cols-4 md:grid-rows-2 md:gap-6 space-y-6 md:space-y-0'>
                
            <div className='relative lg:col-span-2 lg:row-span-2 rounded-lg overflow-hidden'>
                <div className='absolute bottom-0 pl-4 pb-4 text-black font-bold z-20'>
                </div>
                <img src={imagf} alt='survey' className='w-full h-full object-cover'/>
            </div>
            <div className='relative md:col-span-2 md:h-40 rounded-lg overflow-hidden'>
                <div className='absolute bottom-0 pl-4 pb-4 text-black font-bold z-20'>
                </div>
                <img src={imagb} alt='survey' className='w-full h-full object-cover'/>
            </div>
            <div className='relative rounded-lg overflow-hidden'>
                <div className='absolute bottom-0 pl-4 pb-4 text-black font-bold z-20'>
                </div>
                <img src={imagc} alt='survey' className='w-full h-full object-cover'/>
            </div>
            <div className='relative rounded-lg overflow-hidden'>
                <div className='absolute bottom-0 pl-4 pb-4 text-black font-bold z-20'>
                </div>
                <img src={imagd} alt='survey' className='w-full h-full object-cover'/>
            </div>   
            </div>
            <Dash />
        </div>
    </div>
  )
}

export default Graficas