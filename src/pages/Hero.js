import React from 'react';
import bgimg from '../assets/docs.jpg';
import MainLayout from '../layouts/MainLayout';
import Support from './Support';
const Hero = () => {
  return (
    <MainLayout>
      <div className="w-full md:h-screen h-full bg-zinc-200 flex flex-col py-9 justify-between  ">
        <div className="grid max-w-[1240px] m-auto gap-5 md:grid-cols-2 ">
          <div>
            <img src={bgimg} alt="/" className="w-full rounded-full p-6" />
          </div>
          <div className="flex flex-col justify-center md:items-start w-full px-4 py-8">
            <h1 className="text-2xl font-bold text-indigo-950 md:text-3xl ">
              We offer comprehensive care to help you achieve wellness and a
              healthy, fulfilling lifestyle.
            </h1>
            <p className="text-xl py-3">
              Check out famHealth Health: Our virtual primary and chronic care
              services, along with mental health support, help you attain
              wellness and enjoy life!
            </p>
            <button className="py-3 px-6 sm:w-[60%] my-1">
              <a href="/login">Get Started</a>
            </button>
          </div>
        </div>
      </div>
      <Support />
    </MainLayout>
  );
};

export default Hero;
