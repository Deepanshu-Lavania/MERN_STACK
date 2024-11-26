import React, { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";

export default function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("messenger");
      Cookies.remove("jwt");
      alert("Logout Successfully");
      if (setLoading) {
        setLoading(false);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" bg-slate-900 text-white flex flex-col justify-end">
        <div className="align-bottom">
          <button onClick={handleLogout}>
            <BiLogOutCircle className="text-4xl mx-1 p-1 hover:bg-gray-600 rounded-lg duration-300" />
          </button>
        </div>
      </div>
    </>
  );
}
