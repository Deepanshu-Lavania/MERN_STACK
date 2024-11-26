import React from "react";
import User from "./User";
import GetAllUsers from "../../context/GetAllUsers";

export default function Users() {
  const [allUsers, loading] = GetAllUsers();
  console.log("allusers are : ",allUsers);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div
      style={{
        maxHeight: "calc(83vh) ",
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {/* <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User /> */}
      {allUsers.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
}
