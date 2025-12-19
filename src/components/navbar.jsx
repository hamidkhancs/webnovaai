import React, { useState } from 'react'

import {FaBars} from 'react-icons/fa'
import {FaXmark} from 'react-icons/fa6'



const Navbar = () => {
    const [showMenu, setShowmenu] = useState(false)
  return (
   <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
    <div className='container mx-auto flex justify-between items-center'>
        <div>
            <a className='text-3xl font-bold text-white' href="#">WebNova
                 <span className=' text-purple-600  text-3xl ml-1 mt-2'>AI</span>
            </a>
        </div>
        <div className='hidden md:flex space-x-10' >
            <a href="#home" className='relative text-white transition duration-300 text-1xl hover:text-purple group'>
            <span>Home</span>
            <span className='absolute left-0 bottom-0.5 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#about" className='relative text-white transition duration-300 text-1xl hover:text-purple group'>
            <span>About</span>
            <span className='absolute left-0 bottom-0.5 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#projects" className='relative text-white transition duration-300 text-1xl hover:text-purple group'>
            <span>Projects</span>
            <span className='absolute left-0 bottom-0.5 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#skills" className='relative text-white transition duration-300 text-1xl hover:text-purple group'>
            <span>Skills</span>
            <span className='absolute left-0 bottom-0.5 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#hireme" className='relative text-white transition duration-300 text-1xl hover:text-purple group'>
            <span>Hire Me</span>
            <span className='absolute left-0 bottom-0.5 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>
        </div>
        <div className='md:hidden'> { 
        showMenu ?
            
            <FaXmark onClick={()=>setShowmenu(!showMenu)} className='text-2xl cursor-pointer' />:
            <FaBars onClick={()=>setShowmenu(!showMenu)} className='text-2xl cursor-pointer' /> 
        }
        </div>
    </div>
    {
        showMenu && (
            <div className='md:hidden bg-dark-100/95 backdrop-blur-sm flex flex-col items-center py-4 space-y-4 '>
                <a href="#home" className='relative text-white transition duration-300 text-7xl hover:text-purple group'>
            <span>Home</span>
           
            </a>
            <a href="#about" className='relative text-white transition duration-300 text-2xl hover:text-purple group'>
            <span>About</span>
            
            </a>
            <a href="#projects" className='relative text-white transition duration-300 text-2xl hover:text-purple group'>
            <span>Projects</span>

            </a>
            <a href="#skills" className='relative text-white transition duration-300 text-2xl hover:text-purple group'>
            <span>Skills</span>
           
            </a>
            <a href="#hireme" className='relative text-white transition duration-300 text-2xl hover:text-purple group'>
            <span>Hire Me</span>
            
            </a>
            </div>
        )
    }
   </nav>
  )
}

export default Navbar
