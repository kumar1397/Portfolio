import React from 'react'
import calc from '../images/calc.jpeg'
import weather from '../images/weather.png'
import blog from '../images/blog.jpg'
import shop from '../images/shop.jpg'
import tic from '../images/tic.jpg'
export const Projects = () => {
  return (
    <div className='h-screen w-screen bg-gradient-to-r from-rose-100 to-teal-100'>
        <div className='flex justify-center text-6xl font-black texty mb-9'><span className='mt-5'>Projects</span></div>
        <div className='flex flex-wrap justify-center text-xl bg-gradient-to-r from-rose-100 to-teal-100'>
            <div className='flex flex-col rounded-lg border-4 border-slate-400 w-1/4 mx-5 my-5'>
                <div className='flex flex-col'>
                    <img src={shop} alt="shopping app" className='w-auto h-auto'/>
                    <span className='text-center'>A fancy shopping site</span>
                </div>
                <a href="https://ecomzy-liard.vercel.app/" className='flex justify-center items-end'><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ">View Project</button></a>
            </div>
            <div className='flex flex-col rounded-lg border-4 border-slate-400 w-1/4 mx-5 my-5'>
                <div className='flex flex-col'>
                    <img src={blog} alt="blog app" />
                    <span className='text-center'>A tech blog site</span>
                </div>
                <a href="https://blog-app-hazel-one.vercel.app/" className='flex justify-center'><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">View Project</button></a>
            </div>
            <div className='flex flex-col rounded-lg border-4 border-slate-400 w-1/4 mx-5 my-5'>
                <div className='flex flex-col'>
                    <img src={tic} alt="tic-tac-toe" />
                    <span className='text-center'>Tic-tac-toe</span>
                </div>
                <a href="https://tic-tac-toe-self-psi.vercel.app/" className='flex justify-center'><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">View Project</button></a>
            </div>
            <div className='flex flex-col rounded-lg border-4 border-slate-400 w-1/4 mx-5 my-5'>
                <div className='flex flex-col'>
                    <img src={calc} alt="calculator" />
                    <span className='text-center'>A calculator app</span>
                </div>
                <a href="https://kumar1397.github.io/calculator/" className='flex justify-center'><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">View Project</button></a>
            </div>
            <div className='flex flex-col rounded-lg border-4 border-slate-400 w-1/4 mx-5 my-5'>
                <div className='flex flex-col'>
                    <img src={weather} alt="weather app" />
                    <span className='text-center'> weather app</span>
                </div>
                <a href="https://weather-app-drab-pi.vercel.app/" className='flex justify-center'><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mb-4 rounded">View Project</button></a>  
            </div>
        </div>
    </div>
  )
}
