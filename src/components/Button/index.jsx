import React from "react";

function Button() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("¡Botón clickeado!");
  };

  return <button onClick={handleClick}>Hacer clic</button>;
}

export default Button;
