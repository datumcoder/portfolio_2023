import React from 'react'

const ProjectItem = ({img,title}) => {
  return (


    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] '>
    <img src={img} alt='' className='rounded-xl group-hover:opacity-10' />
    
    <div className='hidden group-hover:block absolute' >
    <h3 className='text-2xl font-bold text-white tracking-wider text-center '>
    {title}
    </h3>
      <p className="pb-4 pt2 text-2xl font-bold text-white text-center">My project</p>
      <a href="/">
      <p className="text-center p-2 rounded-md bg-white text-gray-700 font-bold cursor-pointer text-lg">More Info</p>
      </a>
      </div>
    </div>
    
  )
}

export default ProjectItem
