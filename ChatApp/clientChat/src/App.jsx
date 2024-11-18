import React from "react";
import LeftSide from "./home/left/LeftSide";
import RightSide from "./home/right/RightSide";
import Logout from "./home/left/left1/Logout";

export default function App() {
  return (
    <>
      <div className="flex  h-screen">
        <Logout></Logout>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </div>
    </>
  );
}
