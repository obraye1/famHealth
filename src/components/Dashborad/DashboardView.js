import React, { useState } from 'react';
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa';
import proImg from '../../assets/profileIcon.png';

const DashboardView = () => {
  const [open, setOpen] = useState(false);

  const showDropDown = () => {
    setOpen(!open);
  };
  return (
    <div className="flex justify-between items-center h-[70px] shadow-lg px-[25px] ">
      <div className=" flex items-center rounded-[5px] ">
        <input
          type="text"
          className="bg-[#f8f9fc] h-[40px] outline-none pl-[13px] w-[350px] font-normal placeholder:text-[14px] leading-[20px] "
          placeholder="Search for ..."
        />
        <div className="bg-indigo-600 h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
          <FaSearch color="white" />
        </div>
      </div>

      <div className="flex items-center gap-[15px] relative cursor-pointer ">
        <div className="flex gap-[15px] items-center border-r-[1px] pr-3">
          <FaRegBell />
          <FaEnvelope />
        </div>
        <div className="flex items-center gap-[15px] relative  ">
          <p>John Doe</p>
          <div className="w-[45px] h-[45px] rounded-full  flex items-center justify-center relative   ">
            <img src={proImg} alt="Profile display " onClick={showDropDown} />
          </div>
          {open && (
            <div className="bg-white border h-[120px] w-[150px] absolute bottom-[135px] z-20 right-0 pt-[15px] pl-[15px] ">
              <p className="cursor-pointer hover:text-[blue] font-semibold ">
                Profile
              </p>
              <p className="cursor-pointer hover:text-[blue] font-semibold ">
                Settings
              </p>
              <p className="cursor-pointer hover:text-[blue] font-semibold ">
                Log Out
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
