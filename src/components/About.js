import React from 'react'
import img from '../images/about.png'
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaNode , FaBootstrap , FaGitAlt } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress , SiMongodb , SiCloudinary , SiPostman } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode , VscGithubInverted } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";


const About = () => {
  return (
    <>
    <div className='w-screen h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 '>

        <div className='flex justify-center text-6xl font-black  text-white'><span className='mt-6'>About me</span></div>

        <div className='flex flex-row flex-wrap justify-around mt-28 '>
            <div className='w-1/3 h-auto '>
              <img src={img} alt="student"/>
            </div>
            <div className='w-2/4 flex justify-center items-center text-2xl font-medium text-white '>
            <div ><p>Hi Everyone, I am Iswar Kumar Sahu from Odisha, India. I am currently a student at NIT Rourkela.My journey in the tech industry began with a curiosity for creating beautiful and functional websites, and it has evolved into a deep-seated passion for crafting seamless user experiences and solving complex challenges through code.</p></div>
            </div>
        </div>
        <div className='flex flex-wrap flex-col justify-center items-center gap-y-20  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'> 
          <div className='flex justify-center font-bold text-4xl mt-20'>Personal Skillset</div>
          <div className='flex flex-wrap justify-center gap-10  mb-10'>
            <div className='border-4 border-black w-52 h-32 flex justify-center items-center'><CgCPlusPlus className='w-20 h-20 hovery'/></div>
            <div className='border-4 border-black w-52 h-32 flex justify-center items-center '><IoLogoJavascript className='w-20 h-20 '/></div>
            <div className='border-4 border-black w-52 h-32 flex justify-center items-center'> <FaReact className='w-20 h-20 '/></div>
            <div className='border-4 border-black w-52 h-32 flex justify-center items-center'><FaNode className='w-20 h-20 '/></div>
            <div className='border-4 border-black w-52 h-32 flex justify-center items-center'><SiExpress className='w-20 h-20 '/></div>
            <div className='border-4 border-black w-52 h-32 flex justify-center items-center'><SiMongodb className='w-20 h-20 '/></div>
            <div className='border-4 border-black w-52 h-32 flex justify-center items-center'><FaBootstrap className='w-20 h-20 '/></div>
            <div className='border-4 border-black w-52 h-32 flex justify-center items-center'><RiTailwindCssFill className='w-20 h-20 '/></div>
            <div className='border-4 border-black w-52 h-32 flex justify-center items-center'><FaGitAlt className='w-20 h-20 '/></div>              
          </div>

        </div>
        <div className='flex flex-wrap flex-col justify-center items-center gap-y-20  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'> 
          <div className='flex justify-center font-bold text-4xl mt-20'>Tools i use</div>
          <div className='flex flex-wrap justify-center gap-10  mb-10'>
            <div className='border-4 border-black w-52 h-32 flex justify-center items-center'><FaWindows className='w-20 h-20 '/></div>
            <div className='border-4 border-black w-52 h-32 flex justify-center items-center'><VscVscode className='w-20 h-20 '/></div>
            <div className='border-4 border-black w-52 h-32 flex justify-center items-center'> <SiPostman className='w-20 h-20 '/></div>
            <div className='border-4 border-black w-52 h-32 flex justify-center items-center'><IoLogoVercel className='w-20 h-20 '/></div>
            <div className='border-4 border-black w-52 h-32 flex justify-center items-center'><VscGithubInverted className='w-20 h-20 '/></div>
            <div className='border-4 border-black w-52 h-32 flex justify-center items-center'><SiCloudinary className='w-20 h-20 '/></div>
          </div>
        </div>
    </div>
    </>
  )
}
export default About;