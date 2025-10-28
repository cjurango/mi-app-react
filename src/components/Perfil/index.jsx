import React from "react";

function Perfil({
  nombre,
  profesion,
  edad,
  estaActivo = false,
  tecnologias = [],
}) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Profesión: {profesion}</p>
      <p>Edad: {edad}</p>
      <p>
        Estado:{" "}
        {edad > 18 ? <span className="activo">Adulto</span> : <span>Niño</span>}
      </p>
      {estaActivo === true && <p>Está activo</p>}
      <h3>Tecnologías:</h3>
      <ul>
        {tecnologias.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <br />
    </div>
  );
}

export default Perfil;
