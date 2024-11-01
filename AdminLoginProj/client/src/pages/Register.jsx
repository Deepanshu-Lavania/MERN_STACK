import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Register() {
  const [user, setuser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  // const {storetokenInLS} = useContext(AuthContext);
  const { storetokenInLS } = useAuth();

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
    try {
      //! header , body in HTTP request with payloads :
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      // console.log("response through register page is : ",response);
      //! send data using axios
      // const response = await axios.post("http://localhost:8000/register", user);
      // console.log("register respose is : ",response);
      const res_data = await response.json();
      console.log("response of frontend through register page is : ", res_data);
      if (response.ok) {
        alert("Registeration Successful");
        storetokenInLS(res_data.token);

        setuser({ username: "", email: "", phone: "", password: "" });
        navigate("/");
      } else {
        alert(res_data.ExtraDetails ? res_data.ExtraDetails : res_data.Message);
      }
    } catch (error) {
      console.log("register Frontend Error : ", error.response.data);
    }
    //CORS policy means : (Cross-Origin Resource Sharing) is a security feature implemented by web browses to restrict webpages from makign requests to a different domain than the one that served the webpage
    //?encounterd CORS issues when the frontend and backend are hosted on different domains.
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container gird grid-two-cols">
              <div className="registration-image">
                <img src="" alt="register-image" width="400" height="500" />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
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
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
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
                    Register Now
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
