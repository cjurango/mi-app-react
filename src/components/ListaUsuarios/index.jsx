import React from "react";

import { useAuth } from "../../hooks/useAuth";

function ListaUsuarios({ usuarios }) {
  const { hasPermission } = useAuth();

  if (!hasPermission("view_users")) {
    return <div>No tienes permisos para ver la lista de usuarios</div>;
  }

  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>
          {usuario.nombre} ({usuario.email})
        </li>
      ))}
    </ul>
  );
}

export default ListaUsuarios;
