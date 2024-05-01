import React from 'react'
import './Wave.css'
import img from '../images/pimg.png'
const Home = () => {
  return (
    <>
    <div className='h-screen w-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
      <div className='flex flex-row flex-wrap justify-between'>
          <div className='w-1/3 h-screen'> 
            <div className='flex ml-5 justify-center items-center h-full '>
              <img src={img} alt="student" />
            </div> 
          </div>
          <div className='w-1/2 flex justify-center flex-col font-bold tp'>
            <span className='text-6xl font-black  '>HELLO,<span class="wave">👋</span> </span>
     
            <span className='text-6xl font-black   items-end'> I am Iswar Kumar Sahu and</span>
  
            <span className='text-6xl font-black  items-end'> I am a front-end developer</span>
           
          </div>
      </div>
    </div>
   
    </>
  )
}
export default Home;