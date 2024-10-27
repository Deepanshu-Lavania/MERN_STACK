import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";


export default function login() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const {storetokenInLS}=useAuth();

  const handleInput = (event) => {
    // console.log(event.target);

    let name = event.target.name;
    let value = event.target.value;
    setuser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    //! send data using axios
    try {
      const response = await axios.post("http://localhost:8000/login", user);
      console.log(response.data.msg);
      if (response.status==200) {
        alert("login Scucessful");

        const res_data = response.data;
        storetokenInLS(res_data.token);

        setuser({ email: "", password: "" });
        navigate("/");
        // deepanshu631088@gmail.com
      }else{
        alert("Invalid Credentials")
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container gird grid-two-cols">
              <div className="login-image">
                <img src="" alt="login-image" width="400" height="500" />
              </div>
              <div className="login-form">
                <h1 className="main-heading mb-3">login form</h1>
                <br />
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="text"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    login Now
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
