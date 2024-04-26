import { createContext } from "react";
export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const userinfo = {};
  return (
    <AuthContext.Provider value={userinfo}>{children}</AuthContext.Provider>
  );
};
