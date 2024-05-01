import React from 'react'

export const Contact = () => {
  return (
    <div className='flex flex-col 0 gap-y-72 h-screen w-screen bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800'>
        <div className='text-7xl font-extrabold flex justify-center items-center w-full mt-10 '>Connect with me</div>
        <div className='flex flex-row justify-center gap-20 mb-32'>
            <div className='flex flex-col items-center gap-3'>
                <i class="fa-solid fa-phone mt-7 "></i>
                <span className='text-xl place-contect-left'>7606898959</span>
            </div>
            <div className='flex flex-col gap-3 items-center' >
                <a href="mailto:sahuiswar007@gmail.com"><i class="fa-regular fa-envelope "></i></a>
                <span className='text-xl'>sahuiswar007@gmail.com</span>
            </div>
            <div className='flex flex-col items-center'>
                <a href="https://github.com/kumar1397"><i class="fa-brands fa-github-alt "></i></a>
                <span className='text-xl'>github</span>
            </div>
            <div className='flex flex-col items-center'>
                <a href="https://www.linkedin.com/in/iswar-kumar-sahu-a01b721a2/"><i class="fa-brands fa-linkedin-in "></i></a>
                <span className='text-xl'>LinkedIn</span>
            </div>
            <div className='flex flex-col items-center'>
                <a href="https://vercel.com/kumar-1397s-projects"><i class="fa-solid fa-v "></i></a>
                <span className='text-xl'>Vercel</span>
            </div>
        </div>
    </div>
  )
}
