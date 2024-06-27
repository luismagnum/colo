import React from 'react';
import {Link} from "react-scroll";
import whats from '../assets/whats.png';
import Dash from '../components/Dash';

const Footer = () => {
  return (
        <div class="container mx-auto px-6">
          <Dash />
        <div class="grid grid-cols-12">
            <div class="col-span-12">
                <div class="py-[60px] px-0">
                  <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                      <div class="lg:col-span-4 md:col-span-12">
                          <span class="text-2xl text-gray-500 font-semibold flex justify-center lg:justify-start">Colo Styles</span>
                          <p class="mt-3 text-gray-400 text-justify">
                          Ya sea que necesites un corte de pelo rápido, un arreglo de barba o una experiencia de grooming completa, en Colo Styles 
                          encontrarás todo lo que necesitas. Ven y descubre por qué somos la opción preferida de tantos clientes satisfechos.<br></br>
                          ¡Te esperamos!  
                          </p>
                         
                      </div>
                    <div class="lg:col-span-2 md:col-span-4 text-center lg:text-justify">
                      <h5 class="tracking-[1] text-gray-500 font-semibold">Horario</h5>
                      <ul class="list-none mt-6">
                        <li>
                          <a href="#" class="text-gray-400 transition-all duration-500 ease-in-out">
                            Lunes a 
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-400 transition-all duration-500 ease-in-out">
                            Sabado
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-400 transition-all duration-500 ease-in-out">
                            9hs a 20hs.
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="lg:col-span-2 md:col-span-4 text-center lg:text-justify">
                      <h5 class="tracking-[1] text-gray-500 font-semibold">Ubicacion</h5>
                      <ul class="list-none mt-6">
                        <li>
                          <a href="#" class="text-gray-400 transition-all duration-500 ease-in-out">
                            Juan XXIII
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-400 transition-all duration-500 ease-in-out">
                            Y Avellaneda
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-400 transition-all duration-500 ease-in-out">
                            LA HERMAMDAD.
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="lg:col-span-3 md:col-span-4 text-center lg:text-justify">
                      <h5 class="tracking-[1] text-gray-500 font-semibold">Rapida atencion</h5>
                      <ul class="list-none mt-6 relative">
                       <p class="text-gray-500 mt-6 mb-1">Solicitar un turno<span><img src={whats} alt="whats" width={35} className='absolute mt-1 ml-20 md:ml-16'/></span></p>
                       <div class="grid grid-cols-1">
                       <buton class="py-2 px-3 inline-block font-bold tracking-wide border-none rounded-lg align-middle text-center bg-gray-400 hover:text-gray-700 text-black">
                        <a class='my-3' href="https://wa.me/542984417477?text=Hola quiero hacer una consulta" target="_blank">WhatsApp</a>
                       </buton>
                       </div>
                      </ul>
                  </div>
                </div>
                <div class="flex justify-center py-7 px-0">
                  <div class="container mx-auto px-6 mt-10">
                    <div class="text-center">
                     <p class=" text-gray-500 text-xs md:text-base">&copy;
                      COLO STYLES 2024.Todos los derechos reservados.<br></br>
                      developer web Luis E. Diaz
                     </p>
                    </div>
                    <div class="flex flex-col text-center justify-center mt-4">
                      <Link class="text-center items-center text-xl text-gray-500 hover:text-gray-700 cursor-pointer" to="home">Home</Link>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer