import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLogged: false,
    name: null,
  });

  const login = () => {
    setUser({
      isLogged: true,
      name: "Gerardo Romero",
    });
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
