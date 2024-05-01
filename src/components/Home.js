import React from 'react'
import img from '../images/pimg.png'
const Home = () => {
  return (
    <>
    <div className='h-full bg-fuchsia-50'>
      <div className='flex flex-row flex-wrap bg-gradient-to-r from-stone-500 to-stone-700 '>
          <div className='w-1/3 h-1/3'> 
            <div className='flex justify-center items-center mt-20 ml-5 mb-20'>
              <img src={img} alt="student"/>
            </div> 
          </div>
          <div className='w-1/2 flex justify-center items-center flex-col font-bold '>
            <span className='text-4xl'>HELLO,</span>
            <br />
            <span className='text-4xl'> I am Iswar Kumar Sahu and</span>
            <br />
            <span className='text-4xl'> I am a front-end developer</span>
           
          </div>
      </div>
    </div>
   
    </>
  )
}
export default Home;