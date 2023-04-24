import React from 'react';
import {
  FaTachometerAlt,
  FaSwatchbook,
  FaChevronRight,
  FaHandHoldingHeart,
  FaBookReader,
  FaRegCalendarAlt,
  FaChevronLeft,

} from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';


const SideBar = () => {
  return (
    <div className="bg-indigo-600 h-screen px-[25px]">
      <div className="px-4 py-6 flex items-center justify-center border-b border-gray-500">
        <h1 className="text-white font-extrabold text-2xl leading cursor-pointer">
          User Panel
        </h1>
      </div>
      <div className="flex items-center gap-[15px] py-2 border-b border-gray-500">
        <FaTachometerAlt color="white" />
        <p className="text-[14px] leading-[20px] font-bold text-white">
          Dashboard
        </p>
      </div>
      <div className="pt-[15px] border-b  border-gray-500">
        <p className="text-[10px] font-extrabold leading-[16px] text-gray-900 ">
          INTERFACE
        </p>
        <div className="flex items-center justify-between gap-[10px] py-2 cursor-pointer ">
          <div className="flex items-center gap-[10px]">
            <FaSwatchbook color="white" />
            <p className="text-[14px] text-normal text-white leading-[20px]">
              Bookings
            </p>
          </div>
          <FaChevronRight color="white " />
        </div>

        <div className="flex items-center justify-between gap-[10px] py-2 cursor-pointer ">
          <div className="flex items-center gap-[10px]">
            <FaHandHoldingHeart color="white" />
            <p className="text-[14px] text-normal text-white leading-[20px]">
              Health Report
            </p>
          </div>
          <FaChevronRight color="white " />
        </div>
      </div>
      {/* Support section for Video Call and Login pages  */}
      <div className="pt-[20px] border-b  border-gray-500 ">
        <p className="text-[10px] font-extrabold leading-[16px] text-gray-900 ">
          HELP
        </p>
        <div className="flex items-center justify-between gap-[10px] py-2 cursor-pointer ">
          <div className="flex items-center gap-[10px]">
            <FaBookReader color="white" />
            <p className="text-[14px] text-normal text-white leading-[20px]">
              Pages
            </p>
          </div>
          <FaChevronRight color="white " />
        </div>

        <div className="flex items-center justify-between gap-[10px] py-2 cursor-pointer ">
          <div className="flex items-center gap-[10px]">
            <BiSupport color="white" />
            <p className="text-[14px] text-normal text-white leading-[20px]">
              Customer Care
            </p>
          </div>
          <FaChevronRight color="white " />
        </div>
        <div className="flex items-center gap-[10px] py-[20px]">
          <FaRegCalendarAlt color="white" />
          <p className="text-[14px] text-normal text-white leading-[20px]">
            Visit Date
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center pt-[30px]">
          <div className="flex h-[40px] w-[40px] bg-indigo-700  rounded-full items-center justify-center cursor-pointer ">
            <FaChevronLeft color="white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
