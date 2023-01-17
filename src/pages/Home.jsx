import React from "react";
import { SlPeople } from "react-icons/sl";
import { RiAdminLine } from "react-icons/ri";
import { BiTime } from "react-icons/bi";
import { FiAlertTriangle } from "react-icons/fi";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col md:flex-row items-center p-10 gap-6">
        <div className="bg-green-500 text-white w-full h-40 flex flex-col justify-center items-center text-2xl font-bold rounded-md gap-4 text-center">
          <div className="text-3xl">
            <SlPeople />
          </div>
          <h1>2 Members</h1>
        </div>
        <div className="bg-blue-500 text-white w-full h-40 flex flex-col justify-center items-center text-2xl font-bold rounded-md gap-4 text-center">
          <div className="text-3xl">
            <RiAdminLine />
          </div>
          <h1>3 Stuffs</h1>
        </div>
        <div className="bg-yellow-500 text-white w-full h-40 flex flex-col justify-center items-center text-2xl font-bold rounded-md gap-4 text-center">
          <div className="text-3xl">
            <BiTime />
          </div>
          <h1>5 Waiting</h1>
        </div>
        <div className="bg-red-500 text-white w-full h-40 flex flex-col justify-center items-center text-2xl font-bold rounded-md gap-4 text-center">
          <div className="text-3xl">
            <FiAlertTriangle />
          </div>
          <h1>1 should pay</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
