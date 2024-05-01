import React from 'react'

export const Contact = () => {
  return (
    <div className='flex flex-col'>
        <div className='text-lg font-bold flex justify-center items-center w-full h-44 border-8'>Connect with me</div>
        <div className='flex flex-row justify-center gap-20'>
            <div className='flex flex-col items-center'>
                <i class="fa-solid fa-phone fa-3x mt-1 "></i>
                <span className='text-xl place-contect-left'>7606898959</span>
            </div>
            <div className='flex flex-col gap-3 items-center' >
                <a href="mailto:sahuiswar007@gmail.com"><i class="fa-regular fa-envelope fa-3x"></i></a>
                <span className='text-xl'>sahuiswar007@gmail.com</span>
            </div>
            <div className='flex flex-col items-center'>
                <a href="https://github.com/kumar1397"><i class="fa-brands fa-github-alt fa-3x"></i></a>
                <span className='text-xl'>github</span>
            </div>
            <div className='flex flex-col items-center'>
                <a href="https://www.linkedin.com/in/iswar-kumar-sahu-a01b721a2/"><i class="fa-brands fa-linkedin-in fa-3x"></i></a>
                <span className='text-xl'>LinkedIn</span>
            </div>
        </div>
    </div>
  )
}
