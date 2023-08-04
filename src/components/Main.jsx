import React from 'react'
import Image from '../images/main_bg.jpg'
import { TypeAnimation } from 'react-type-animation'
import {FaLinkedin,FaTwitter,FaGithub,FaWhatsapp} from 'react-icons/fa'



const Main = () => {
  return (

    <div id='main'>
        <img className='w-full h-screen object-cover object-center scale-x-[-1]' src={Image} alt=""/>
    <div className="w-full h-screen absolute top-0 right-0 bg-white/50">

    <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center'>
      <h1 className='sm:text-5xl text-4xl font-bold text-[#001b5e]'>I'm Patrick O'Sullivan</h1>
      <h2 className='flex sm:text-3xl text-2xl pt-4  text-[#001b5e]'>I'm a 
      <TypeAnimation
      sequence={[
        
        'Web Developer',
        2000,
        ' Coder',
        2000,
        'Tech Enthusiast',
        3000,
      
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
      style={{fontSize:'1em', paddingLeft:'5px' }}
    />
    </h2>
    <div className='flex justify-between pt-9 max-w-[300px] w-full'>
      <FaGithub className='cursor-pointer  text-[#001b5e] ' size={30} />
      <FaLinkedin className='cursor-pointer  text-[#001b5e]' size={30}/>
      <FaTwitter className='cursor-pointer  text-[#001b5e]' size={30}/>
      <FaWhatsapp className='cursor-pointer  text-[#001b5e] ' size={30}/>
      </div>
      
    </div>
    </div>



    </div>

  )
}

export default Main

