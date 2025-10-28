import { useAuth } from "../../hooks/useAuth";

function ProtectedRoute({ children, requiredRole, requiredPermission }) {
  const { usuario, hasRole, hasPermission } = useAuth();

  if (!usuario) {
    return <div>Por favor inicia sesión para acceder</div>;
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return <div>No tienes permisos para acceder a esta página</div>;
  }

  if (requiredPermission && !hasPermission(requiredPermission)) {
    return <div>No tienes los permisos necesarios</div>;
  }

  return children;
}

export default ProtectedRoute;
