import React, { useEffect} from "react";
import User from "./User";
import GetAllUsers from "../../context/GetAllUsers";


export default function Users() {

  const [allUsers, loading] = GetAllUsers();
  console.log("allusers are : ", allUsers);

 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    {/* Ist div */}
      {/* <div>
        {selectedConversation ? (
          <div>
            <Chatuser />
            <Messages />
            <Type />
          </div>
        ) : (
          <div
            style={{
              maxHeight: "calc(87vh)",
              overflowY: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {allUsers.map((user, index) => (
              <User key={index} user={user} />
            ))}
          </div>
        )}
      </div> */}
      <div
            style={{
              maxHeight: "calc(87vh)",
              overflowY: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {allUsers.map((user, index) => (
              <User key={index} user={user} />
            ))}
          </div>
    </>
  );
}
