
import React, { useState } from 'react';
import {Link} from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
function Nav() {
 const [click, setClick] = useState(false);
 const handleClick = () => setClick(!click)
       
 
    const content =<>
    
    <div className='lg:hidden block  top-16 w-full left-0 right-0 bg-slate-900 transition fixed z-10'>
      <ul className='text-center text-xl p-20'>
            <Link spy={true} smooth={true} to='Home'>
            <li className='my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded'>
              
            </li>
            </Link>
            <Link  spy={true} smooth={true} to='About'>
            <li className='my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded'>
              
            </li>
            </Link>
            <Link  spy={true} smooth={true} to='Service'>
            <li className='my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded'>
              
            </li>
            </Link>
            <Link  spy={true} smooth={true} to='Projects'>
            <li className='my-4 py-4 border-slate-800 hover:bg-slate-800'>
              
            </li>
            </Link>
            <Link  spy={true} smooth={true} to='Contacts'>
            <li>
            
            </li>
            </Link>
      </ul>
    </div>
    </>
     return (
  <nav>
<div className='h-10vh flex justify-between z-10 text-white lg:py-5 px-20 py-4 border-b border-slate-800'>
  <div className='flex items-center flex-1'>
    <span className='text-3xl font-bold'>logo</span>
  </div>
  <div className='lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden'>
    <div className='flex-10'>
    <ul className='flex gap-8 mr-16 text-[18px]'>
      
            <Link spy={true} smooth={true} to='Home'>
            <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900  hover:border-fuchsia-600 cursor-pointer'>
              Home
            </li>
            </Link>
            <Link spy={true} smooth={true} to='About'>
            <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900  hover:border-fuchsia-600 cursor-pointer'>
              About
            </li>
            </Link>
            <Link spy={true} smooth={true} to='Service'>
            <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900  hover:border-fuchsia-600 cursor-pointer'>
              Service
            </li>
            </Link>
            <Link spy={true} smooth={true} to='Projects'>
            <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>
              Projects
            </li>
            </Link>
            <Link spy={true} smooth={true} to='Contacts'>
            <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900  hover:border-fuchsia-600 cursor-pointer'>Contacts</li>
            </Link>
            </ul>
            </div>
            <div>
              {click && content}
            </div>
            <button className='block sm:hidden transition' onClick={ handleClick}>
              {click ? <FaTimes/> : <CiMenuFries/>}
            </button>
      </div>
    </div>
  </nav>
  )
}

export default Nav
