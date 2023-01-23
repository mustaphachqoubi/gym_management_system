import React, { useState } from "react";
import { AiTwotoneFilter } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setMembersList } from "../redux/MembersReducers/Members";
import { members } from "../dummy";

const Filter = () => {
  const [filterSize, setFilterSize] = useState("md:w-40 h-10");
  const [filterContent, setFilterContent] = useState("hidden");

  const dispatch = useDispatch();

  const FilterByAge = (age) => {
    if (age <= 18) {
      dispatch(setMembersList(members.filter((m) => m.age <= age)));
    } else if (age >= 20) {
      dispatch(
        setMembersList(members.filter((m) => m.age >= age && m.age < 40))
      );
    } else {
      dispatch(setMembersList(members.filter((m) => m.age >= 40)));
    }
  };

  const FilterByGender = (g) => {
    if (g === "male") {
      dispatch(
        setMembersList(members.filter((m) => m.gender.toLocaleLowerCase() == g))
      );
    } else {
      dispatch(
        setMembersList(members.filter((m) => m.gender.toLocaleLowerCase() == g))
      );
    }
  };

  const FilterByPayed = (p) => {
    p === true
      ? dispatch(setMembersList(members.filter((m) => m.payed === p)))
      : p === "wait"
      ? dispatch(setMembersList(members.filter((m) => m.payed === "wait")))
      : dispatch(setMembersList(members.filter((m) => m.payed === p)));
  };

  return (
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
            <h3
              onClick={() => FilterByAge(18)}
              className="hover:text-slate-600 m-2"
            >
              -18
            </h3>
            <h3
              onClick={() => FilterByAge(20)}
              className="hover:text-slate-600 m-2"
            >
              +20
            </h3>
            <h3
              onClick={() => FilterByAge(40)}
              className="hover:text-slate-600 m-2"
            >
              +40
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lg text-black">gender</h1>
          <div className="text-sm flex flex-col items-center">
            <h3
              onClick={() => FilterByGender("male")}
              className="hover:text-slate-600 m-2"
            >
              Male
            </h3>
            <h3
              onClick={() => FilterByGender("female")}
              className="hover:text-slate-600 m-2"
            >
              Female
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lg text-black">payed</h1>
          <div className="text-sm flex flex-col items-center">
            <h3
              onClick={() => FilterByPayed(true)}
              className="hover:text-slate-600 m-2"
            >
              Yes
            </h3>
            <h3
              onClick={() => FilterByPayed(false)}
              className="hover:text-slate-600 m-2"
            >
              No
            </h3>
            <h3
              onClick={() => FilterByPayed("wait")}
              className="hover:text-slate-600 m-2"
            >
              wait
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
