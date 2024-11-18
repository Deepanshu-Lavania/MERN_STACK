import React from "react";
import User from "./User";

export default function Users() {
  return (
    <div
      style={{
        maxHeight: "calc(83vh) ",
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>
  );
}
