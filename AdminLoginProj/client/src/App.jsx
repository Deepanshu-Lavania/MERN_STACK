import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Navbar from "./Components/Header/Navbar";
import Logout from "./pages/Logout";
import AdminLayout from "./Components/layouts/Admin-Layout";
import AdminUsers from "./pages/Admin-User";
import AdminContacts from "./pages/Admin-Contact";
import UpdateData from "./pages/UpdateData";
// import UpdateData from "./pages/UpdateData";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="user" element={<AdminUsers />} />
              <Route path="users/:id/edit" element={<UpdateData/>}/>
              <Route path="contact" element={<AdminContacts />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
