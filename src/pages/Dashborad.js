import React from 'react';
import SideBar from '../components/Dashborad/SideBar';
import DashboardView from '../components/Dashborad/DashboardView';

const Dashborad = ({ children }) => {
  return (
    <div className="flex ">
      <div className="basis-[20%] h-[100vh]">
        <SideBar />
      </div>
      <div className="basis-[80%] border h-[100vh] overflow-scroll">
        <DashboardView />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Dashborad;
