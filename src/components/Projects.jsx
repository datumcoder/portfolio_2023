import React from 'react'
import ProjectItem from './ProjectItem'
import schoolImg from '../images/school.png'
import freelancerImg from '../images/freelancer.jpg'
import websiteImg from '../images/website.jpg'
import webdevImg from '../images/webdev.png'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1080px] m-auto md:pl-20 p-4 py-16'>

    <h1 className=' text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>

    <p className='text-center py-8'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequatur voluptatum at eum id aliquam ut illo quidem repudiandae possimus, explicabo praesentium aspernatur? Earum quo voluptatibus dicta laborum obcaecati perspiciatis.
    </p>

    <div>   <div className='grid sm:grid-cols-2 gap-14'>
      <a href="https://brochow.school" target='blank'><ProjectItem img={schoolImg} title=''/></a> 
      <a href="https://talknative.pl" target='blank'> <ProjectItem img={freelancerImg} title=''/></a> 
      <a href="https://patrickosullivan.dev" target='blank'><ProjectItem img={webdevImg} title=''/></a> 
      <a href="https://mystifying-yalow-521b6e.netlify.app/" target='blank'><ProjectItem img={websiteImg} title=''/></a> 
      </div>
      </div>
   
    </div>
  )
}

export default Projects
