import { useParams } from "react-router-dom";

function Producto() {
  const { categoria, producto } = useParams();

  return (
    <div>
      <h2>Producto {producto.toUpperCase()}</h2>
      <h3>Categoría {categoria.toUpperCase()}</h3>
    </div>
  );
}

export default Producto;
