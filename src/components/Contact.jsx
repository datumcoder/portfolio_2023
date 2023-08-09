import React from 'react'

const Contact = () => {
  return (
    <div className='max-w[1040px] m-auto md:pl-20 p4 py-16'>
      <h1 className='py-4 pb-14 text-4xl font-bold text-center text-[#001b5e] font-[Raleway]'>
      Contact
      </h1>
      <div class="flex items-center h-screen w-full bg-gray-100">
  <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
    <h1 class="block w-full text-center text-grey-darkest mb-6"></h1>

    <form id='contact' class="mb-4 md:flex md:flex-wrap md:justify-between" name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div class="flex flex-col mb-4 md:w-full">
        <label class="mb-2 uppercase tracking-widest font-bold text-lg text-grey-darkest" for="first_name">Your Name</label>
        <input class="border py-2 px-3 text-grey-darkest md:mr-2" type="text" name="name" id="name"/>
      </div>
    
      <div class="flex flex-col mb-4 md:w-full">
        <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Email</label>
        <input class="border py-2 px-3 text-grey-darkest" type="email" id="inputEmail" name="email" />
      </div>
      <div class="flex flex-col mb-6 md:w-full">
        <label className='uppercase text-sm py-2 font-bold'>Message</label>
            <textarea className='border-2 rounded-lg p-4' rows="7"  name='message'/>
      </div>
      <button class="bg-[#001b5e] text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Submit</button>
    </form>
    </div>
  </div>
</div>
  )
}

export default Contact
