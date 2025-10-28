import { useState } from "react";

import useLocalStorage from "../../../hooks/useLocalStorage";

import { AuthContext } from "..";

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useLocalStorage("usuario_autenticado", null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (username, password) => {
    setIsLoading(true);

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const userData = await response.json();
      // Mock de roles y permisos
      userData.rol = "admin";
      userData.permisos = ["view_users"];
      setUsuario(userData);
    } catch (error) {
      console.error("Error en login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUsuario(null);
  };

  const hasRole = (role) => {
    return usuario?.rol === role;
  };

  const hasPermission = (permission) => {
    return usuario?.permisos?.includes(permission);
  };

  return (
    <AuthContext.Provider
      value={{ usuario, login, logout, isLoading, hasRole, hasPermission }}
    >
      {children}
    </AuthContext.Provider>
  );
};
