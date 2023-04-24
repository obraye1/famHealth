import React from 'react';
import SideBar from '../components/Dashborad/SideBar'


const Dashborad = () => {
  return (
    <div className="flex">
      <div className="basis-[20%] h-[100vh]">
        <SideBar />
      </div>
      <div className="basis-[80%]">kd</div>
    </div>
  );
};

export default Dashborad;
