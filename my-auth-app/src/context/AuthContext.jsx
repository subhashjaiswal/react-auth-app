/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user"))
  );
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken")
  );

  useEffect(() => {
    if (user && authToken) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("authToken", authToken);
    }
  }, [user, authToken]);

  const logout = () => {
    setUser(null);
    setAuthToken(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, setUser, authToken, setAuthToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
