import React from 'react'
import img from '../images/newImage.jpg'
const About = () => {
  return (
    <>
      <div className='flex justify-center font-bold text-4xl mt-7'>About me</div>
      <div className='flex flex-row '>
          <div className='w-1/3 h-auto '>
            <img src={img} alt="student"/>
          </div>
          <div className='w-3/4 '>
           <div className='flex justify-center items-center'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo maxime reiciendis asperiores et nobis vel autem modi reprehenderit assumenda.</p></div>
          </div>
      </div>
    </>
  )
}
export default About;