import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../store/auth.jsx";

export default function Navbar() {
  const { isLoggedIn } = useAuth();
  console.log("isLoggedIn : ", isLoggedIn);

  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo-brand">
            <NavLink to="/">Lavania</NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/services">Service</NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
