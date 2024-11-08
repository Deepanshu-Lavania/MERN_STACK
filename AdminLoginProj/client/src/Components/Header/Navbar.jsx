// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css";
// import { useAuth } from "../../store/auth.jsx";


// export default function Navbar() {
//   const { isLoggedIn } = useAuth();
//   console.log("isLoggedIn : ", isLoggedIn);

//   /* User is Admin or not */
//   const { userlogIn,isLoading} = useAuth();
//   console.log("Admin Layout : ",userlogIn);
//   if (isLoading) {
//     return <h1>Loading...</h1>
//   }
//   return (
//     <>
//       <header>
//         <div className="header-container">
//           <div className="logo-brand">
//             <NavLink to="/">Lavania</NavLink>
//           </div>
//           <nav>
//             <ul>
//               <li>
//                 <NavLink to="/">Home</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about">About</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/contact">Contact</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/services">Service</NavLink>
//               </li>
//               {isLoggedIn ? (
//                 <li>
//                   <NavLink to="/logout">Logout</NavLink>
//                 </li>
//               ) : (
//                 userlogIn.isAdmin?(
//                   <>
//                   <li>
//                     <NavLink to="/admin">Admin</NavLink>
//                   </li>
//                    <li>
//                     <NavLink to="/register">Register</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/login">Login</NavLink>
//                   </li>
//                   </>
//                 ):(
//                   <>
//                   <li>
//                     <NavLink to="/register">Register</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/login">Login</NavLink>
//                   </li>
//                 </>
//                 )
//               )}
                
//             </ul>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }



import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../store/auth.jsx";

export default function Navbar() {
  const { isLoggedIn, userlogIn, isLoading } = useAuth();
  
  console.log("isLoggedIn:", isLoggedIn);
  console.log("Admin Layout:", userlogIn);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // Helper functions to render links based on the user's state
  const renderAuthLinks = () => {
    
    if (userlogIn.isAdmin && isLoggedIn) {
      return (
        <>
          <li><NavLink to="/admin">Admin</NavLink></li>
          <li><NavLink to="/logout">Logout</NavLink></li>
        </>
      );
    }
    else if (isLoggedIn && !userlogIn.isAdmin) {
      return <li><NavLink to="/logout">Logout</NavLink></li>;
    }

    return (
      <>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </>
    );
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo-brand">
          <NavLink to="/">Lavania</NavLink>
        </div>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/services">Service</NavLink></li>
            {renderAuthLinks()}
          </ul>
        </nav>
      </div>
    </header>
  );
}
