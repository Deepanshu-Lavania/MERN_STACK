import React from "react";

export default function User({user }) {
  return (
    <div >
      <div className="flex space-x-4 px-6 py-5 hover:bg-slate-600 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1 className="font-bold">{user.name}</h1>
          <span className="font-light">{user.email}</span>
        </div>
      </div>
    </div>
  );
}
