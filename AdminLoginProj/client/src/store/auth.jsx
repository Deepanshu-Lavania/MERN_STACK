import { createContext, useContext } from "react";
import React from "react";

export const AuthContext = createContext(); //whearHouse

export const AuthProvider = ({ children }) => {
  //provider
  const storetokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };
  return (
    <AuthContext.Provider value={{ storetokenInLS }}>
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
