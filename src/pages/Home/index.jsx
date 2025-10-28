import "../styles.css";

import ListaUsuarios from "../../components/ListaUsuarios";

const usuarios = [
  {
    id: 1,
    nombre: "Juan",
    email: "juan@gmail.com",
    rol: "admin",
  },
  {
    id: 2,
    nombre: "Maria",
    email: "maria@gmail.com",
    rol: "user",
  },
];

function Home() {
  return (
    <section>
      <h2>Bienvenido a mi app</h2>
      <p>Esta es la ruta principal</p>
      <ListaUsuarios usuarios={usuarios} />
    </section>
  );
}

export default Home;
