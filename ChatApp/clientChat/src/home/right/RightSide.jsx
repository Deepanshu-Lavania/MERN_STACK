import React from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Type from "./Type";

export default function RightSide() {
  return (
    <>
      <div className="w-[70%] bg-slate-900 text-white">
        <Chatuser/>
        <Messages/>
        <Type/>
      </div>
    </>
  );
}
