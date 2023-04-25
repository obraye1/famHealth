import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Progress, Space, Calendar, theme } from 'antd';

import Dashborad from '../../pages/Dashborad';
import { FaEllipsisV, FaRegCalendarMinus } from 'react-icons/fa';
import PieComponent from './PieComponent';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};
const Main = () => {
  var Monthly = 9000;
  var visted = 67;
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <Dashborad>
      <div className="pt-[25px] px-[25px] bg-[#f8f9fc]">
        <div className="flex justify-between  items-center">
          <h1 className="text-[#5a5c69] font-normal leading-[30px] text-[28px] cursor-pointer  ">
            Dashboard
          </h1>
          <button className="h-[32px] flex items-center text-white justify-center px-[30px] ">
            Generate Report
          </button>
        </div>
        <div className="grid grid-cols-3 gap-[30px] mt-[25px] pb-[15px]">
          <div className="h-[100px] cursor-pointer rounded-[8px] border-l-[4px] bg-white border-[red] flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition ease-out duration-300 ">
            <div>
              <h2 className="text-[#8589df] text-[11px] leading-[17px] font-bold">
                Medical Billings {Monthly}
              </h2>
              <h3 className="font-bold leading-[24px] text-[20] mt-[5px] text-[#5a5c69] ">
                $40,040
              </h3>
            </div>
            <FaRegCalendarMinus fontSize={28} color="" />
          </div>

          <div className="h-[100px] cursor-pointer rounded-[8px] border-l-[4px] bg-white border-[green] flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition ease-out duration-300 ">
            <div>
              <h2 className="text-[#8589df] text-[11px] leading-[17px] font-bold">
                Number of Visit
              </h2>
              <h3 className="font-bold leading-[24px] text-[20] mt-[5px] text-[#5a5c69] ">
                {visted}
              </h3>
            </div>
            <FaRegCalendarMinus fontSize={28} color="" />
          </div>

          <div className="h-[100px] cursor-pointer rounded-[8px] border-l-[4px] bg-white border-[purple] flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition ease-out duration-300 ">
            <div>
              <h2 className="text-[#8589df] text-[11px] leading-[17px] font-bold">
                Next Appointment
              </h2>
              <h3 className="font-bold leading-[24px] text-[20] mt-[5px] text-[#5a5c69] ">
                {new Date().getUTCFullYear()} / {new Date().getDate()}
              </h3>
            </div>
            <FaRegCalendarMinus fontSize={28} color="" />
          </div>
        </div>
        <div className="flex mt-[22px] w-full gap-[30px] ">
          <div className="basis-[65%] border bg-white shadow-md cursor-pointer rounded-[4px] ">
            <div className="flex justify-between py-[15px] items-center bg-[#f8f9fc] px-[20px] border-b-[1px] border-[#ededed] mb-[20px]">
              <h2 className="text-indigo-700 leading-[20px] font-bold text-[16px]">
                Checkup Overview
              </h2>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <div>
              <LineChart
                width={750}
                height={400}
                data={data}
                margin={{
                  top: 5,
                  right: 20,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </div>
          </div>
          <div className="basis-[35%] border bg-white shadow-md cursor-pointer rounded-[4px]">
            <div className="flex justify-between py-[15px] items-center bg-[#f8f9fc] px-[20px] border-b-[1px] border-[#ededed] mb-[20px]">
              <h2 className="text-indigo-700 leading-[20px] font-bold text-[16px]">
                Wellness{' '}
              </h2>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <div className="pl-[20px]">
              <PieComponent />
            </div>
          </div>
        </div>
        <div className="flex mt-[22px] w-full gap-[30px] py-7">
          <div className="basis-[55%] border bg-white rounded-[4px] shadow-md cursor-pointer">
            <div className="flex justify-between py-[15px] items-center bg-[#f8f9fc] px-[20px] border-b-[1px] border-[#ededed] mb-[20px]">
              <h2 className="text-indigo-700 leading-[20px] font-bold text-[16px]">
                Completed Appointments{' '}
              </h2>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <div className="px-[25px] ml-7 mt-[100px] space-y-[15px] py-[15px]">
              <Space wrap>
                <h2 className="font-light text-gray-800">Checkups</h2>
                <Progress
                  type="circle"
                  percent={75}
                  format={(percent) => `${percent} Days`}
                />
                <h2 className="font-light text-gray-800">Medications</h2>
                <Progress type="circle" percent={100} format={() => 'Done'} />
              </Space>
            </div>
          </div>
          <div className="basis-[45%] border shasow-md cursor-pointer bg-white rounded-[4px]">
            <div className="flex justify-between py-[15px] items-center bg-[#f8f9fc] px-[20px] border-b-[1px] border-[#ededed] mb-[20px]">
              <h2 className="text-indigo-700 leading-[20px] font-bold text-[16px]">
                Appointment Date
              </h2>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <div className="ml-[90px]">
              <div style={wrapperStyle}>
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashborad>
  );
};

export default Main;
