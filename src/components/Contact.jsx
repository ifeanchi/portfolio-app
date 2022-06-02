import React from 'react'

const Contact = () => {
  return (
    <div name = 'contact' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Contact
          </p>
          <p className='py-4'> shoot me an email - ifeanchi@gmail.com</p>
        </div>
        <div>
          <form className='flex flex-col max-w-[600px] w-full '>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="5" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default Contact





{/* <div name='contact' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='flex flex-col justify-center items-center w-full h-full p-4 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full '>
              <div className='mt-25'>
                  <p className='text-4xl  font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                  <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - ifeanchi@gmail.com</p>
              </div>
              <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
              <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
              <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
          </form>
        </div>
      </div>
    </div> */}