import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Stanley Enyinnaya
          </h1>
          <h3 className='text-3xl sm:text-7xl font-bold text-[#8892b0]'>
            I'm a Full Stack Developer.
          </h3>
          <h3 className='text-[#8892b0] py-4 max-w-[700px]'>
            I am passionate about building excellent software that improves the lives of those around me.
            I am currently working with Verizon as a System Engineer and I also work on personal project for individual and small businesses.
          </h3>
      </div>
    </div>
  );
};

export default Home;
