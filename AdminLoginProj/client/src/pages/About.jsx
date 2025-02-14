import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function About() {
  const { userlogIn } = useAuth();

  return (
    <>
      <div className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>
              Welcome {userlogIn ? <p><span style={{color:"red", textTransform:"capitalize"}}>{userlogIn.username}</span> to our website</p> : "to our website"}
            </p>
            <h1>why Choose Us?</h1>
            <p>
              Expert Our team consists of expreienced IT professional whos are
              passionate about staying up-to-date with the latest industry
              trends.
            </p>
            <br />
            <p>
              Customization We understand that every business is unique. That's
              why we create solutions that are tatilored to your specific to
              your specific needs and goals.
            </p>
            <div className="btn .btn-group">
              <NavLink to="/contact">
                <button className="btn">connect now</button>
              </NavLink>
              <NavLink to="/services">
                <button className="btn">learn more </button>
              </NavLink>
            </div>
          </div>
          <div className="hero-image">
            <img src="" alt="About Us" width="400" height="500" />
          </div>
        </div>
      </div>
    </>
  );
}
