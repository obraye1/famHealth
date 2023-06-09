import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handeleClick = () => setNav(!nav);
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center ">
          <h1 className="text-3xl font-bold mx-5 sm-text-4xl text-indigo-950">
            {' '}
            famHealth
          </h1>
        </div>
        <div>
          <ul className="hidden md:flex ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About </li>
            <li>  <Link to="/contact">Support</Link>
</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4 ">
            <Link to="/login">Login</Link>
          </button>
          <button className="px-8 py-2">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
        <div className="md:hidden" onClick={handeleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute bg-zinc-200 w-full px-8 lg:hidden md:hidden xl:hidden 2xl:hidden'
        }
      >
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About </li>
        <li className="border-b-2 border-zinc-300 w-full"> Support
</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4 ">
            {/* <Link to="/login">Login</Link> */}
          </button>
          <button className="px-8 py-3 ">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;


