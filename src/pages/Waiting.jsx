import React, { useState, useEffect } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiOutlinePencil } from "react-icons/hi";
import { FiTrash2, FiArchive } from "react-icons/fi";
import { members } from "../dummy";
import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi"


const Wait = () => {
  const [moreBtn, setMoreBtn] = useState("hidden");
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="h-screen relative">
      <div className="flex flex-col p-10">
        <div className="border w-full rounded-md ">
          <div className="bg-gray-300 flex items-center p-8 font-bold relative">
            <div className="absolute left-10">
              <div className="text-gray-500 flex gap-6 md:gap-14 ">
                <h1>#</h1>
                <h1>Name</h1>
              </div>
            </div>
            <div className="text-gray-500 flex gap-4 absolute right-10 ">
              <h1 className="w-20 hidden md:flex justify-center items-center">
                Age
              </h1>
              <h1 className="w-20 hidden md:flex justify-start items-center">
                Gender
              </h1>
              <h1 className="w-20 hidden md:flex justify-center items-center">
                Membership
              </h1>
              <h1 className="w-20 hidden md:flex justify-center items-center">
                payed?
              </h1>
              <h1 className="w-20 hidden md:flex justify-center items-center">
                Actions
              </h1>
            </div>
          </div>

          <div className="flex flex-col relative">
            {members.map(
              (member) =>
                member.payed === 'wait' && (
                  <div
                    key={member.id}
                    className="flex p-10 items-center border-b relative hover:bg-slate-200"
                  >
                    <div className="absolute left-10">
                      <div className="text-gray-500 flex gap-2 md:gap-6 items-center">
                        <h1 className="w-5 md:w-10">{member.id}</h1>
                        <div className="flex gap-2 items-center cursor-pointer">
                          <div className="w-10 h-10 rounded-full overflow-hidden hidden md:block">
                            <img
                              className="object-cover w-full h-full"
                              src={member.image}
                              alt="person"
                            />
                          </div>
                          <h1 className={`font-bold text-sm`}>
                            {member.fullname}
                          </h1>
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
                      {member.payed === 'wait' && (
                        <div className="hidden md:flex gap-1 items-center justify-center h-10 w-20 bg-orange-500 text-orange-900 font-bold rounded-md">
                        <BiTime />
                        <h1>Wait</h1>
                      </div>
                      )}

                      <div
                        onClick={() => {
                          moreBtn === "hidden"
                            ? setMoreBtn("absolute")
                            : setMoreBtn("hidden");
                          setSelectedUser(member.id);
                        }}
                        className="relative hidden md:flex gap-1 items-center justify-center h-10 w-20 cursor-pointer hover:bg-zinc-400 bg-zinc-300 text-zinc-700 font-bold rounded-md"
                      >
                        <BiDotsHorizontalRounded />
                        More
                      </div>
                    </div>
                    {selectedUser === member.id && (
                      <div
                        onClick={() => {
                          moreBtn === "hidden"
                            ? setMoreBtn("absolute")
                            : setMoreBtn("hidden");
                        }}
                        className={`${moreBtn} right-20 text-sm top-14 bg-white w-40 h-[16.5vh] border z-50 rounded-md`}
                      >
                        <div className="border-b p-2 font-bold hover:bg-slate-100 cursor-pointer flex justify-between items-center">
                          <h1>Edit</h1>
                          <HiOutlinePencil />
                        </div>
                        <div className="text-yellow-500 border-b p-2 font-bold hover:bg-slate-100 cursor-pointer flex justify-between items-center">
                          <h1>Archive</h1>
                          <FiArchive />
                        </div>
                        <div className="text-red-500 p-2 font-bold hover:bg-slate-100 cursor-pointer flex justify-between items-center">
                          <h1>Remove</h1>
                          <FiTrash2 />
                        </div>
                      </div>
                    )}
                  </div>
                )
            )}
          </div>
        </div>
        <Link to="/" className=" w-full md:w-20 h-0 mb-20">
          <div className="bg-blue-500 hover:bg-blue-700 cursor-pointer w-full md:w-20 h-10 rounded-md text-white font-bold flex justify-center items-center my-5">
            Back
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Wait;
