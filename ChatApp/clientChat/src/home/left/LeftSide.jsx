import React from "react";
import Search from "./Search";
import Users from "./Users";

export default function LeftSide() {
  return (
    <>
        <h1 className="font-bold text-2xl p-1 px-7">Chats</h1>
        <Search />
        <hr />
        <Users></Users>
    </>
  );
}
// import React from "react";
// import Search from "./Search";
// import Users from "./Users";

// export default function LeftSide() {
//   return (
//     <>
//       <div className="w-full bg-black text-white sm:w-[30%]">
//         <h1 className="font-bold text-2xl p-1 px-7">Chats</h1>
//         <Search />
//         <hr />
//         <Users></Users>
//       </div>
//     </>
//   );
// }
