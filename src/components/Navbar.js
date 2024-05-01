import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='w-full h-12 bg-black mt-6 '>
        <div className='flex justify-center'>
            <ul className='flex flex-row gap-20 text-slate-100 '>
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/Contact">Contact me</NavLink></li>
              
                {/* <li className='text-xl  mt-2'>Home</li>
                <li className='text-xl mt-2'>About me</li>
                <li className='text-xl mt-2'>Projects</li>
                <li className='text-xl mt-2'>Contact me</li> */}
            </ul>
        </div>
    
    </div>
  )
}
export default Navbar;
