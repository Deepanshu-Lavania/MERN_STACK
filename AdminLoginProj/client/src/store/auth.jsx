import { createContext, useContext, useState } from "react";
import React from "react";

export const AuthContext = createContext(); //whearHouse

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log("token is : ",token);
  
  //provider
  const storetokenInLS = (serverToken) => {
    // return localStorage.setItem("token",serverToken);   //! OR  
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
    //?This setup is common in applications that need to maintain session persistence (e.g., for logged-in users), combining both localStorage (for persistence across reloads) and React state (for immediate, responsive UI updates). By calling setToken(serverToken) after updating localStorage, the AuthProvider reflects the latest token value instantly in components.
  };

  let isLoggedIn = !!token;//if present then it will true
  console.log("isLoggedIn : ",isLoggedIn);

  //tackling logout functionality
  const LogoutUser=()=>{
    setToken("");
    return localStorage.removeItem("token");
  }
  return (
    <AuthContext.Provider value={{isLoggedIn, storetokenInLS, LogoutUser }}>
      {/* If you used only one pair of curly braces ({ storetokenInLS }), JSX would interpret it as the function itself, not as an object */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {//custom hook
  //consumer
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
