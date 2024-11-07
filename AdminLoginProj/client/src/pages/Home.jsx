import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>We are the World Best IT Company</p>
            <h1>Welcome to Lavania Family</h1>
            <p>
              Are you ready to take your business to the next level with
              ctiting-edge IT solutions? Look no further! At Lavania , we
              specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
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
            <img src="" alt="coding together" width="400" height="500" />
          </div>
        </div>
      </div>
      {/* 2nd Section */}
      <div className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>registered companies</p>
          </div>
          <div className="div1">
            <h2>10000+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well Known Developers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>services</p>
          </div>
        </div>
      </div>

      {/* 3rd SEction */}
      <div className="hero-content">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <img src="" alt="coding together" width="400" height="500" />
          </div>
          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consultation and let's discuss how Lavania can help your business thrive in the digital age.
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
        </div>
      </div>
    </>
  );
}
