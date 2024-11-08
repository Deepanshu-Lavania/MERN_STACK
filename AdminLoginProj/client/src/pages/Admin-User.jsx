import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import {toast } from 'react-toastify';


export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();
  console.log("Admin - user : ", authorizationToken);

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:8000/admin/users", {
        method: "GET",
        headers: {
          // Authorization: `Bearer ${token}`,
          Authorization: authorizationToken,
        },
      });
      console.log("Admin-User response : ", response);
      const data = await response.json();
      // console.log(`users ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  //delete the user on delete button
  const deleteUser = async (id) => {
    try {
      console.log(id);
      const response = await fetch(
        `http://localhost:8000/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        getAllUsersData();
        toast.success("Data delete successfully");
      }
      const data = await response.json();
      console.log(`users after delete : ${data}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);
  return (
    <>
      <div className="container">
        <h1>Admin Users Data</h1>
      </div>
      <div className="container admin-users">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((curUser) => {
              return (
                <>
                  <tr key={curUser._id}>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.phone}</td>
                    <td>
                      <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(curUser._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
