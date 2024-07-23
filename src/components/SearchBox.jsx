import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const [isOpenSearchBox, setIsOpenSearchBox] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  const toggleSearchBox = () => {
    setIsOpenSearchBox(!isOpenSearchBox);
  };
  return (
    <>
      <button className="mx-2 px-2 py-2 rounded-lg bg-[#314157] block md:hidden" onClick={toggleSearchBox}>
      {isOpenSearchBox ? (
            <CiSearch className="text-2xl text-white" />
          ) : (
            <CiSearch className="text-2xl text-white" />
          )}
      </button>
      <form
        className="flex items-center mx-auto sm:bg-transparent md:bg-[#1F2937] px-2 py-2 rounded-lg md:px-4 md:py-3 overflow-hidden"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search"
          className="outline-none border-b-2 border-white text-white bg-transparent pl-2 hidden md:block"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="mx-2 px-2 py-2 rounded-lg bg-transparent md:bg-[#314157] hidden md:block">
        <CiSearch className="text-2xl text-white" />
        </button>
        {isOpenSearchBox && (
          <div className="flex justify-center my-2 mx-2 items-center px-2 py-2 top-14 absolute left-0 right-0 bg-[#1F2937] rounded-lg transition-ease-in-out md:hidden">
            <input
              type="text"
              placeholder="Search"
              className="outline-none border-b-2 border-white bg-transparent pl-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="mx-2 bg-[#314157] px-2 py-2 rounded-lg">
              <CiSearch className="text-2xl text-white" />
            </button>
          </div>
        )}
      </form>
    </>
  );
}
