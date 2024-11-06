import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function UpdateData() {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const {authorizationToken} = useAuth();
  console.log("params id is : ",params);
  
  const getSingleUserdata = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/admin/users/${params.id}`, //get url id
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data =await response.json();
      console.log(`Single user data : ${data}`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    console.log(e.target.value);
  };
  //update single user data
  useEffect(() => {
    getSingleUserdata();
  }, []);
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container gird grid-two-cols">
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />
                <form>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={data.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={data.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Mobile</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone number"
                      id="phone"
                      required
                      autoComplete="off"
                      value={data.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
