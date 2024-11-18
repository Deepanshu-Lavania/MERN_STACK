import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
export default function Logout() {
  return (
    <>
      <div className=" bg-slate-900 text-white flex flex-col justify-end">
        <div className="align-bottom">
          <button>
            <BiLogOutCircle className="text-4xl mx-1 p-1 hover:bg-gray-600 rounded-lg duration-300" />
          </button>
        </div>
      </div>
    </>
  );
}
