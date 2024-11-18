import React from "react";
import Search from "./Search";
import Users from "./Users";

export default function LeftSide() {
  return (
    <>
      <div className="w-[30%] bg-black text-white">
        <h1 className="font-bold text-2xl p-1 px-7">Chats</h1>
        <Search />
        <hr />
        <Users></Users>
      </div>
    </>
  );
}
