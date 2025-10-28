import React from "react";

function Tarjeta({ titulo, descripcion, imagen }) {
  const claseCSS = titulo.length > 20 ? "titulo-largo" : "titulo-normal";

  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} />
      <h2 className={claseCSS}>{titulo}</h2>
      <p>{descripcion}</p>
      <buttons>
        <button variant="solid" onClick={() => console.log("Clic en", titulo)}>
          Ver más
        </button>
      </buttons>
    </div>
  );
}

export default Tarjeta;
