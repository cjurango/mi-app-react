import React, { useState } from "react";

function ContadorInteractivo() {
  const [contador, setContador] = useState(0);

  const decrementar = () => {
    setContador((contadorPrevio) => contadorPrevio - 1);
  };

  const resetear = () => {
    setContador(0);
  };

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <div>
        <button onClick={decrementar}>-</button>
        <button onClick={resetear}>Reset</button>
      </div>
    </div>
  );
}

export default ContadorInteractivo;
