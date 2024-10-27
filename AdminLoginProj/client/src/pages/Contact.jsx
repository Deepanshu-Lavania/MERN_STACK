import React, { useState } from "react";

export default function Contact() {
  const [user, setuser] = useState({
    username: "",
    email: "",
    message: "",
  });
  const handleInput = (event) => {
    console.log(event.target);

    let name = event.target.name;
    let value = event.target.value;
    setuser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".3rem",
                    }}
                  >
                    <label htmlFor="message">Message</label>
                    <textarea
                      type="text"
                      rows="4"
                      cols="8"
                      name="message"
                      placeholder="message"
                      id="message"
                      required
                      autoComplete="off"
                      value={user.message}
                      onChange={handleInput}
                      style={{ border: "1px solid black" }}
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
        <section className="mb-3" style={{marginTop:"2rem"}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169847.0104076054!2d77.53414430329872!3d28.9871617115884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64f457b66325%3A0x42faa83387a6be5e!2sMeerut%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1729879061700!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{border:"0"}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
}
