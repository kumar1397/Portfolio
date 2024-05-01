import React from 'react'
import {  NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className=' text-slate-100  w-screen h-12 bg-black '>
        <ul className='flex justify-center content-center flex-row text-lg gap-11'>
          <li className='mt-2'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='mt-2'>
            <NavLink to='/about'>About</NavLink> 
            {/* navlink is used as a substitute of anchor tag  and is used to get a classname active on current page*/}
          </li>
          <li className='mt-2'>
            <NavLink to='/projects'>Projects</NavLink>
          </li>
          <li className='mt-2'>
            <NavLink to='/contact'>Connect</NavLink>
          </li>
        </ul>
      </nav>
  )
}
export default Navbar;
