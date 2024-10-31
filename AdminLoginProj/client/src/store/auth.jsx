import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

export const AuthContext = createContext(); //whearHouse

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log("token is : ",token);

  const [userlogIn, setUserlogIn] = useState("");
  
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


  //* JWT AUTHENTICATION - to get the currently loggedIn user data

  const userAuthentication = async()=>{
    try {
      const response  = await fetch("http://localhost:8000/user",{
        method:"GET",
        headers:{
          Authorization:`Bearer ${token}`,
        }
      });
      if (response.ok) {//get data from server 
        const data = await response.json();
        console.log("get authetic user data ",data.userData);
        setUserlogIn(data.userData);
      }
    } catch (error) {
      console.log("userData from Authentication error : ", error);
    }
  }

  useEffect(() => {
    if(token){
      userAuthentication();
    }
  }, [token]); // Fetch user data when the token changes

  return (
    <AuthContext.Provider value={{isLoggedIn, storetokenInLS, LogoutUser,userlogIn }}>
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
