import React from "react";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiOutlineSearch,
  AiTwotoneFilter,
} from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { members } from "../dummy";

const Members = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col p-10">
        <div className="bg-gray-300 w-full rounded-md flex flex-col md:flex-row  gap-4 justify-between items-center my-5 p-10">
          <div className="flex w-full">
            <input type="text" className="border-2 border-black w-full bg-gray-300 rounded-l-md py-1 px-4 focus:outline-none placeholder:px-4" placeholder="Search..."/>
            <div className="bg-black text-white text-xl flex justify-center items-center px-4 cursor-pointer rounded-r-md">
              <AiOutlineSearch />
            </div>
          </div>

          <div className="flex gap-4 w-full flex-end justify-end flex-col md:flex-row">
            <div className="flex items-center justify-center gap-2 cursor-pointer bg-gray-400 hover:bg-slate-500 text-zinc-700 font-bold w-full md:w-40 h-10 rounded-md">
              <AiTwotoneFilter />
              <button className="">Filter</button>
            </div>
            <div className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 cursor-pointer font-bold text-white w-full md:w-40 h-10 rounded-md">
              <IoMdAdd />
              <button className="flex">Add member</button>
            </div>
          </div>
        </div>
        <div className="border w-full rounded-md overflow-hidden">
          <div className="bg-gray-300 flex items-center p-8 font-bold relative">
            <div className="absolute left-10">
              <div className="text-gray-500 flex gap-6 ">
                <h1>#</h1>
                <h1>Name</h1>
              </div>
            </div>
            <div className="text-gray-500 flex gap-5 absolute right-10 ">
              <h1 className="w-12 hidden md:flex">Age</h1>
              <h1 className="hidden md:flex">Gender</h1>
              <h1 className="hidden md:flex">Membership</h1>
              <h1 className="px-4 hidden md:flex">payed?</h1>
              <h1 className="px-4">Actions</h1>
            </div>
          </div>

          <div className="flex flex-col">
            {members.map((member) => (
              <div className="flex p-10 items-center border-b relative hover:bg-slate-200">
                <div className="absolute left-10">
                  <div className="text-gray-500 flex gap-6 items-center">
                    <h1>{member.id}</h1>
                    <div className="flex gap-2 items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden hidden md:block">
                        <img
                          className="object-cover w-full h-full"
                          src={member.image}
                          alt="person"
                        />
                      </div>
                      <h1 className="font-bold text-sm">{member.fullname}</h1>
                    </div>
                  </div>
                </div>
                <div className="text-gray-500 flex items-center gap-6 absolute right-10">
                  <h1 className="hidden md:flex">{member.age}</h1>
                  <h1 className="w-20 hidden md:flex justify-center items-center">
                    {member.gender}
                  </h1>
                  {member.membership === "Golden" ? (
                    <div className="bg-amber-400 h-10 w-20 hidden md:flex justify-center items-center font-bold rounded-md text-amber-900">
                      {member.membership}
                    </div>
                  ) : member.membership === "Silver" ? (
                    <div className="bg-slate-400 h-10 w-20 hidden md:flex justify-center items-center font-bold rounded-md text-slate-700">
                      {member.membership}
                    </div>
                  ) : (
                    <div className="bg-violet-400 h-10 w-20 hidden md:flex justify-center items-center font-bold rounded-md text-violet-900">
                      {member.membership}
                    </div>
                  )}
                  {member.payed === true ? (
                    <div className="hidden md:flex gap-1 items-center justify-center h-10 w-20 bg-green-500 text-green-900 font-bold rounded-md">
                      <AiFillCheckCircle />
                      <h1>Yes</h1>
                    </div>
                  ) : (
                    <div className="hidden md:flex gap-1 items-center justify-center h-10 w-20 bg-red-500 text-red-900 font-bold rounded-md">
                      <AiFillCloseCircle />
                      <h1>No</h1>
                    </div>
                  )}

                  <div className="flex gap-1 items-center justify-center h-10 w-20 cursor-pointer hover:bg-zinc-400 bg-zinc-300 text-zinc-700 font-bold rounded-md">
                    <BiDotsHorizontalRounded />
                    More
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
