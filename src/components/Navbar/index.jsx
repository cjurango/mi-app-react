import { NavLink } from "react-router-dom";

import "./styles.css";
import { useAuth } from "../../hooks/useAuth";

function Navbar() {
  const { usuario, logout, hasPermission } = useAuth();

  const activeClassName = ({ isActive }) => {
    return isActive ? "active-link" : "";
  };

  return (
    <nav className="navbar-container">
      <NavLink to="/" className={activeClassName}>
        Home
      </NavLink>
      <NavLink to="/about" className={activeClassName}>
        About
      </NavLink>
      <NavLink to="/dashboard" className={activeClassName} end>
        Dashboard
      </NavLink>
      <NavLink to="/dashboard/stats" className={activeClassName}>
        Stats
      </NavLink>
      {hasPermission("view_users") && (
        <NavLink to="/dashboard/settings" className={activeClassName}>
          Settings
        </NavLink>
      )}
      <div className="navbar-username">
        {usuario?.firstName || "No hay usuario"}
        {usuario && <button onClick={logout}>Cerrar sesión</button>}
      </div>
    </nav>
  );
}

export default Navbar;
