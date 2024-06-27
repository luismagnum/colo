import React, { useState } from 'react';
import {Link} from "react-scroll";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import logo from '../assets/logo.png';
import logob from '../assets/logob.png';


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () =>{
    setMenu(!menu);
  }

  const closeMenu = () =>{
    setMenu(false);
  }
  return (
    <div className='fixed w-full z-20'>
      <div>
        <div className='flex flex-row justify-between p-2 md:px-32 px-5 bg-gray-400 shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
            <div className='flex flex-row items-center cursor-pointer'>
                <span>
                    <img src={logob} alt='logo' width={100} />
                </span>
                <h1 className='text-xm  font-bold md:text-2xl text-black'>Colo Styles</h1>
            </div>
            <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8 text-black'>
                <Link
                 to='home'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-gray-600 transition-all hover:underline cursor-pointer'>
                 Home
                 </Link>
                <Link 
                 to='graficas' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-gray-600 transition-all hover:underline cursor-pointer'>
                 Cortes
                 </Link>
                <Link 
                 to='servicios'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-gray-600 transition-all hover:underline cursor-pointer'>
                 Servicios
                </Link>
                <Link 
                 to='footer' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-gray-600 transition-all cursor-pointer'>
                 Contacto
                </Link>

            </nav>
            <div className='md:hidden flex items-center'>
                {menu ? (
                    <IoClose size={25} onClick={handleChange} className='cursor-pointer'/>
                ):(
                    <TiThMenu size={25} onClick={handleChange} className='cursor-pointer'/>
                )}
            </div>
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-gray-400 text-gray-700 left-0 top-14 font-semibold text-xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
        <Link
                 to='home'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-gray-600 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Home
                 </Link>
                 <Link 
                 to='graficas' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-gray-600 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 cortes
                 </Link>
                 <Link 
                 to='servicios'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-gray-600 transition-all hover:underline cursor-pointer'>
                 Servicios
                </Link>
                <Link 
                 to='footer'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-gray-600 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 contacto
                </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
