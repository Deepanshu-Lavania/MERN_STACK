import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export default function AdminContacts() {
  const { authorizationToken } = useAuth();
  const [contactData, setContactData] = useState([]);
  /* To access all data */
  const getAllContactData = async (res, req) => {
    const response = await fetch(`http://localhost:8000/admin/contacts`, {
      method: "GET",
      headers: {
        Authorization: authorizationToken,
      },
    });
    const data = await response.json();
    // console.log(data);
    if (response.ok) {
      setContactData(data);
    }
  };
  /* To deleteContact data */
  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`users after delete : ${data}`);
      if (response.ok) {
        getAllContactData();
        alert("Data delete successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllContactData();
  }, []);
  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        <h1>Admin User Data</h1>
        <div>
          <div
            className="data"
            style={{ display: "flex", gap: "1rem", flexDirection: "column" }}
          >
            {contactData.map((curContactData, index) => {
              const { username, email, message, _id } = curContactData;
              return (
                <div
                  key={index}
                  className="contact-container"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr 3fr .5fr",
                  }}
                >
                  <p>{username}</p>
                  <p>{email}</p>
                  <p>{message}</p>
                  <button onClick={() => deleteContact(_id)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
