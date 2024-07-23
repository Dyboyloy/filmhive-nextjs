"use client";
import { FaSearch } from "react-icons/fa";

export default function Navbar({
  getAllData,
  searchKeyword,
  setSearchKeyword,
  getAllTVShow,
}) {
  return (
    <div className="bg-[#008DDA] py-2 text-center">
      <input
        type="text"
        placeholder="Search..."
        className="outline-none mx-2 px-5 py-2 bg-transparent border-b-2 border-b-white"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <button
        onClick={() => {
          getAllData(searchKeyword);
          getAllTVShow(searchKeyword);
          setSearchKeyword("");
        }}
        className="mx-2 text-lg"
      >
        <FaSearch />
      </button>
    </div>
  );
}
