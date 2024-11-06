import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaHome } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";

export default function AdminLayout() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/user"><FaUser /> User</NavLink>
              </li>
              <li>
                <NavLink to="/admin/contact"><MdOutlineContactMail /> Contact</NavLink>
              </li>
              <li>
                <NavLink to="/service"><FaListUl /> Services</NavLink>
              </li>
              <li>
                <NavLink to="/"><FaHome /> Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}
