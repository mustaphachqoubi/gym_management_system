import React, { useState, useEffect } from "react";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiOutlineSearch,
  AiTwotoneFilter,
} from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiOutlinePencil } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { FiTrash2, FiArchive } from "react-icons/fi";
import { members } from "../dummy";
import { Link } from "react-router-dom";

const Members = () => {
  const [filterSize, setFilterSize] = useState("md:w-40 h-10");
  const [filterContent, setFilterContent] = useState("hidden");
  const [addMemberContent, setAddMemberContent] = useState("hidden");
  const [moreBtn, setMoreBtn] = useState("hidden");
  const [selectedUser, setSelectedUser] = useState(null);

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    console.log(selectedUser);
  }, selectedUser);
  return (
    <div className="h-full relative">
      <div className="flex flex-col p-10">
        <div className="bg-gray-300 w-full rounded-md flex flex-col md:flex-row  gap-4 justify-between items-start my-5 p-10">
          <div className="flex w-full">
            <input
              type="text"
              className="border-2 border-black w-full bg-gray-300 rounded-l-md py-1 px-4 focus:outline-none placeholder:px-4"
              placeholder="Search..."
            />
            <div className="bg-black text-white text-xl flex justify-center items-center px-4 cursor-pointer rounded-r-md">
              <AiOutlineSearch />
            </div>
          </div>

          <div className="flex gap-4 w-full flex-end justify-end flex-col md:flex-row">
            <div
              className={`relative overflow-hidden flex items-center justify-center gap-2 cursor-pointer bg-gray-400 text-zinc-700 font-bold w-full ${filterSize} rounded-md`}
            >
              <div
                onClick={() => {
                  if (filterSize === "md:w-40 h-10") {
                    setFilterSize("md:w-40 lg:w-80 h-80");
                    setFilterContent("flex");
                  } else {
                    setFilterSize("md:w-40 h-10");
                    setFilterContent("hidden");
                  }
                }}
                className="absolute top-0 flex items-center w-full h-10 flex justify-center items-center hover:text-black"
              >
                <AiTwotoneFilter />
                <button className="">Filter</button>
              </div>

              <div
                className={`${filterContent} flex gap-4 justify-center flex-wrap w-full h-[80%] items-start mt-8 overflow-y-auto`}
              >
                <div className="flex flex-col items-center">
                  <h1 className="text-lg text-black">age</h1>
                  <div className="text-sm flex flex-col items-center">
                    <h3 className="hover:text-slate-600 m-2">-18</h3>
                    <h3 className="hover:text-slate-600 m-2">+20</h3>
                    <h3 className="hover:text-slate-600 m-2">+30</h3>
                    <h3 className="hover:text-slate-600 m-2">+50</h3>
                    <h3 className="hover:text-slate-600 m-2">+60</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-lg text-black">gender</h1>
                  <div className="text-sm flex flex-col items-center">
                    <h3 className="hover:text-slate-600 m-2">Male</h3>
                    <h3 className="hover:text-slate-600 m-2">Female</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-lg text-black">payed</h1>
                  <div className="text-sm flex flex-col items-center">
                    <h3 className="hover:text-slate-600 m-2">Yes</h3>
                    <h3 className="hover:text-slate-600 m-2">No</h3>
                    <h3 className="hover:text-slate-600 m-2">wait</h3>
                  </div>
                </div>
              </div>
            </div>
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
        <div className="border w-full rounded-md overflow-hidden">
          <div className="bg-gray-300 flex items-center p-8 font-bold relative">
            <div className="absolute left-10">
              <div className="text-gray-500 flex gap-6 md:gap-14 ">
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

          <div className="flex flex-col relative">
            {members.map((member) => (
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
                  ) : (
                    <div className="hidden md:flex gap-1 items-center justify-center h-10 w-20 bg-red-500 text-red-900 font-bold rounded-md">
                      <AiFillCloseCircle />
                      <h1>No</h1>
                    </div>
                  )}

                  <div
                    onClick={() => {
                      setMoreBtn("absolute");
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
        <Link to="/">
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
        <div className="w-full z-50 mt-96 md:mt-0">
          <div className="bg-slate-300 w-full mb-2 p-5 rounded-md h-full ">
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 place-content-center md:p-8">
                <input
                  type="text"
                  name="First name"
                  title="First name"
                  placeholder="First name"
                  className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
                />
                <input
                  type="text"
                  name="Last anme"
                  title="Last anme"
                  placeholder="Last name"
                  className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
                />
                <input
                  type="text"
                  name="Phone"
                  title="Phone"
                  placeholder="Phone number"
                  className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
                />
                <input
                  type="text"
                  name="Email"
                  title="Email"
                  placeholder="Email"
                  className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
                />
                <input
                  type="text"
                  name="CIN number"
                  title="CIN number"
                  placeholder="CIN"
                  className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
                />
                <select
                  name="Gender"
                  title="Gender"
                  className="border-2 border-black p-2 bg-slate-100 rounded-md w-full"
                >
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
                <input
                  type="date"
                  name="Birth date"
                  title="Birth date"
                  placeholder="Birth date"
                  className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
                />
                <input
                  type="text"
                  name="Date of joining"
                  title="Date of joining"
                  placeholder="Date of joining"
                  className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
                />
                <select
                  name="membership"
                  title="membership"
                  className="border-2 border-black p-2 bg-slate-100 rounded-md w-full"
                >
                  <option value="">Basic (cardio)</option>
                  <option value="">Silver (lifting)</option>
                  <option value="">Golden (Full)</option>
                </select>
                <input
                  type="file"
                  name="Face Image"
                  title="Face Image"
                  placeholder="face image"
                  className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
                />
                <input
                  type="file"
                  name="CIN Image"
                  title="CIN Image"
                  placeholder="cin image"
                  className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
                />
                <input
                  type="number"
                  name="Price"
                  title="Price"
                  placeholder="Price"
                  className="border-2 border-black p-2 bg-slate-100 rounded-md w-full "
                />
                <select
                  name="Payed?"
                  title="Payed?"
                  className="border-2 border-black p-2 bg-slate-100 rounded-md w-full"
                >
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
                <select
                  name="Duration"
                  title="Duration"
                  className="border-2 border-black p-2 bg-slate-100 rounded-md w-full"
                >
                  {months.map((m) => (
                    <option value="" key={m}>
                      {m} {m === 1 ? "Month" : "Months"}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 md:mt-0 mt-4">
                <div className="bg-blue-500 w-full md:w-20 h-10 font-bold flex justify-center items-center text-white rounded-md hover:bg-blue-700 cursor-pointer">
                  <button>Add</button>
                </div>
                <div
                  onClick={() => {
                    setAddMemberContent("hidden");
                    document.body.style.overflow = "visible";
                  }}
                  className="bg-gray-400 text-zinc-700 font-bold w-full md:w-20 h-10 font-bold flex justify-center items-center text-white rounded-md hover:bg-gray-500 cursor-pointer"
                >
                  <button>Close</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
