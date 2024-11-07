import { Navigate, NavLink, Outlet } from "react-router-dom";

import { FaUser, FaHome } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";
import { useAuth } from "../../store/auth";

export default function AdminLayout() {
  const { userlogIn,isLoading,isLoggedIn} = useAuth();
  console.log("Admin Layout : ",userlogIn);
  if (!isLoggedIn) {
    return <Navigate to="/login"/>
  }
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if  (!userlogIn.isAdmin ) {
    return <Navigate to="/"/>
  }
  return (
    <>
      <header>
        <div className="container">
        <nav>
            <ul>
              <li>
                <NavLink to="/admin/user">
                  <FaUser /> User
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contact">
                  <MdOutlineContactMail /> Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/service">
                  <FaListUl /> Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome /> Home
                </NavLink>
              </li>
            </ul>
          </nav>
         {/*  {isAdmin?<nav>
            <ul>
              <li>
                <NavLink to="/admin/user">
                  <FaUser /> User
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contact">
                  <MdOutlineContactMail /> Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/service">
                  <FaListUl /> Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome /> Home
                </NavLink>
              </li>
            </ul>
          </nav>:<div>You can't access admin panel</div>} */}
        </div>
      </header>
      <Outlet />
    </>
  );
}
