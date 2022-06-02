import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Stanley, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>My journey in technology started with Generation USA in 2021.
            However, I've always had a passion for how things worked in coding.  
            I took advantage of the program by gaining as much knowledge as I could and appliying the things I've learned mixed with hard work to acheive my goals.  
            Although the journey has not always been an easy task, my dedication and persistance pushed me forward to where I am now.  
            Currently I am working on building responsive applications and exposing myself to backend microservices.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
