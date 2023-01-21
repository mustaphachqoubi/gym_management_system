import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setMembersList } from "../redux/MembersReducers/Members";
import { members } from "../dummy";

const Search = () => {
  const dispatch = useDispatch();

  const FilterBySearching = (name) => {
    dispatch(
      setMembersList(
        members.filter((m) => m.fullname.toLocaleLowerCase().includes(name))
      )
    );
  };

  useEffect(() => {
    dispatch(setMembersList(members.map((m) => m)));
  }, []);

  return (
    <div className="flex w-full">
      <input
        onChange={(e) => FilterBySearching(e.target.value.toLocaleLowerCase())}
        type="text"
        className="border-2 border-black w-full bg-gray-300 rounded-l-md py-1 px-4 focus:outline-none placeholder:px-4"
        placeholder="Search..."
      />
      <div className="bg-black text-white text-xl flex justify-center items-center px-4 cursor-pointer rounded-r-md">
        <AiOutlineSearch />
      </div>
    </div>
  );
};

export default Search;
