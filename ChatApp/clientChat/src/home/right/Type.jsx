import React from "react";
import { IoSend } from "react-icons/io5";

export default function Type() {
  return (
    <>
      <div className="px-4 py-4 text-center w-[100%] bg-slate-800 ">
        <form action="">
          <div className="flex gap-2">
            <label className="border-[1px]  border-gray-700 bg-slate-900 rounded-lg flex items-center p-3 gap-2 w-[70%] h-10">
              <input
                type="text"
                className="outline-none bg-slate-900 w-[100%]"
                placeholder="Type here"
              />
            </label>
            <button>
              <IoSend className="text-4xl p-1 hover:bg-gray-600 rounded-lg duration-300" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
