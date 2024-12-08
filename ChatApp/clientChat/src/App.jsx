import React from "react";
import LeftSide from "./home/left/LeftSide";
import RightSide from "./home/right/RightSide";
import Logout from "./home/left/left1/Logout";
import Signup from "./components/signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  const [authUser] = useAuth();
  console.log("authentic user data is : ", authUser);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex w-full  h-screen">
                <Logout></Logout>
                <LeftSide></LeftSide>
                <RightSide></RightSide>
              </div>
            ) : (
              <Navigate to={"/login"}/>
            )
          }
        />
        <Route path="/login" element={authUser?<Navigate to={"/"}/>:<Login/>} />
        <Route path="/signup" element={authUser?<Navigate to={"/"}/>:<Signup />} />
      </Routes>

      {/* <div className="flex  h-screen">
        <Logout></Logout>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </div> */}
      {/* <Signup/> */}
    </>
  );
}
