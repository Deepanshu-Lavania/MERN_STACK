import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className="h-[10vh]">
      <div className="px-4 py-4">
        <form action="">
          <div className="flex gap-2">
            <label className="border-[1px]  border-gray-700 bg-slate-900 rounded-lg flex items-center p-3 gap-2 w-[80%] h-10">
              <input
                type="text"
                className="outline-none bg-slate-900 w-[100%]"
                placeholder="Search"
              />
            </label>
            <button>
              <IoIosSearch className="text-4xl p-1 hover:bg-gray-600 rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
