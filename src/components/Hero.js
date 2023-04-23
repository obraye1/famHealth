import React from 'react';
import bgimg from '../assets/docs.jpg';
const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid max-w-[1240px] m-auto md:grid-cols-2 ">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <h1 className="text-2xl font-bold text-indigo-950 md:text-3xl ">
            We offer comprehensive care to help you achieve wellness and a
            healthy, fulfilling lifestyle.
          </h1>
          <p className="text-xl py-3">
            Check out famHealth Health: Our virtual primary and chronic care
            services, along with mental health support, help you attain wellness
            and enjoy life!
          </p>
          <button className="py-3 px-6 sm:w-[60%] my-2">Get Started</button>
        </div>
        <div>
          <img src={bgimg} alt="/" className="w-full rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
