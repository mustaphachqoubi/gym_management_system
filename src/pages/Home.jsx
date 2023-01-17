import React from "react";
import { SlPeople } from "react-icons/sl";
import { RiAdminLine } from "react-icons/ri";
import { BiTime } from "react-icons/bi";
import { FiAlertTriangle } from "react-icons/fi";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import {Link} from 'react-router-dom'
ChartJS.register(...registerables);

const Home = () => {
  const state = {
    labels: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ],
    datasets: [
      {
        label: "yearly Profit DH",
        pointRadius: 5,
        lineTension: 0.5,
        backgroundColor: "#0ea5e9",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [
          1000, 10000, 3000, 4000, 2000, 6000, 1000, 8000, 9000, 10000, 2000,
          12000,
        ],
      },
    ],
  };
  return (
    <div className="h-full">
      <div className="flex flex-col md:flex-row items-center p-10 gap-5">
        <Link to='/members' className="w-full">
        <div className="bg-green-500 hover:bg-green-700 text-white w-full h-40 flex flex-col justify-center items-center text-2xl font-bold rounded-md gap-4 text-center cursor-pointer">
          <div className="text-3xl">
            <SlPeople />
          </div>
          <h1>2 Members</h1>
        </div>
        </Link>
        <div className="bg-blue-500 hover:bg-blue-700 text-white w-full h-40 flex flex-col justify-center items-center text-2xl font-bold rounded-md gap-4 text-center cursor-pointer">
          <div className="text-3xl">
            <RiAdminLine />
          </div>
          <h1>3 Stuffs</h1>
        </div>
        <div className="bg-yellow-500 hover:bg-yellow-700 text-white w-full h-40 flex flex-col justify-center items-center text-2xl font-bold rounded-md gap-4 text-center cursor-pointer">
          <div className="text-3xl">
            <BiTime />
          </div>
          <h1>5 Waiting</h1>
        </div>
        <div className="bg-red-500 hover:bg-red-700 text-white w-full h-40 flex flex-col justify-center items-center text-2xl font-bold rounded-md gap-4 text-center cursor-pointer">
          <div className="text-3xl">
            <FiAlertTriangle />
          </div>
          <h1>1 should pay</h1>
        </div>
      </div>

      <div className="flex justify-between items-cener p-10 ">
        <div className="flex flex-col md:flex-row w-full gap-2">
          <div className="rounded-md border-2 border-black flex justify-center items-center p-4 w-full md:w-[50%] ">
            <Line data={state} />
          </div>

          <div className="flex w-full md:w-[50%] ">
            <div className="border-2 border-black w-full mb-2 p-5 rounded-md h-full">
              <div>
                <h3>Quick member adding</h3>
              </div>

              <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-wrap gap-4 p-6">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="First name"
                    className="border-2 border-black p-2 bg-slate-100 rounded-md w-full"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Last name"
                    className="border-2 border-black p-2 bg-slate-100 rounded-md w-full"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Phone number"
                    className="border-2 border-black p-2 bg-slate-100 rounded-md w-full"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email"
                    className="border-2 border-black p-2 bg-slate-100 rounded-md w-full"
                  />
                  <div className="bg-blue-500 w-full md:w-20 h-10 font-bold flex justify-center items-center text-white rounded-md hover:bg-blue-700 cursor-pointer">
                    <button>Add</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
