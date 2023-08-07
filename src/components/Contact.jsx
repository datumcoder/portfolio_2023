import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w[1040px] m-auto md:pl-20 p4 py-16'>
      <h1 className='py-4 pb-5 text-4xl font-bold text-center text-[#001b5e] font-[Raleway]'>
      Contact
      </h1>

      <form action="" method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2 font-bold'>Name</label>
            <input className='border-2 rounded-lg p3 flex border-gray-300' type="text"  name='name'/>
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2 font-bold'>Phone</label>
            <input className='border-2 rounded-lg p3 flex border-gray-300' type="text"  name='phone'/>
          </div>
        </div>
        <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2 font-bold'>Email</label>
            <input className='border-2 rounded-lg p3 flex border-gray-300' type="email"  name='email'/>
        </div>
        <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2 font-bold' >Subject</label>
            <input className='border-2 rounded-lg p3 flex border-gray-300' type="text"  name='subject'/>
        </div>
        <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2 font-bold'>Message</label>
            <textarea className='border-2 rounded-lg p-4 border-gray-300' rows="10"  name='message'/>
        </div>
        <button className='bg-[#001b5e] text-gray-200 mt-4 w-full p-4 rounded-lg font-bold'>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
