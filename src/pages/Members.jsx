import React, { useState, useEffect } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiOutlinePencil } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { FiTrash2, FiArchive } from "react-icons/fi";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import Filter from "../components/Filter";
import AddMember from "../components/AddMember";

const Members = () => {
  const [addMemberContent, setAddMemberContent] = useState("hidden");
  const [moreBtn, setMoreBtn] = useState("hidden");
  const [selectedUser, setSelectedUser] = useState(null);
  const { membersList } = useSelector((state) => state.membersList);

  return (
    <div className="h-full relative">
      <div className="flex flex-col p-10">
        <div className="bg-gray-300 w-full rounded-md flex flex-col md:flex-row  gap-4 justify-between items-start my-5 p-10">
          <Search />
          <div className="flex gap-4 w-full flex-end justify-end flex-col md:flex-row">
            <Filter />
            <div
              onClick={() => {
                setAddMemberContent("fixed");
                document.body.style.overflow = "hidden";
              }}
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 cursor-pointer font-bold text-white w-full md:w-40 h-10 rounded-md"
            >
              <IoMdAdd />
              <button className="flex">Add member</button>
            </div>
          </div>
        </div>
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
            {membersList.map((member) => (
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
                      <h1 className={`font-bold text-sm`}>{member.fullname}</h1>
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
                  ) : member.payed === false ? (
                    <div className="hidden md:flex gap-1 items-center justify-center h-10 w-20 bg-red-500 text-red-900 font-bold rounded-md">
                      <AiFillCloseCircle />
                      <h1>No</h1>
                    </div>
                  ) : (
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
            ))}
          </div>
        </div>
        <Link to="/" className=" w-full md:w-20 h-0 mb-20">
          <div className="bg-blue-500 hover:bg-blue-700 cursor-pointer w-full md:w-20 h-10 rounded-md text-white font-bold flex justify-center items-center my-5">
            Back
          </div>
        </Link>
      </div>

      <div
        className={`bg-white/30 backdrop-blur-sm w-full h-screen ${addMemberContent} top-0 left-0 flex justify-center items-center overflow-y-auto p-10`}
      >
        <div
          onClick={() => {
            setAddMemberContent("hidden");
            document.body.style.overflow = "visible";
          }}
          className="fixed top-0 left-0 right-0 bottom-0"
        ></div>
        <AddMember />
      </div>
    </div>
  );
};

export default Members;
