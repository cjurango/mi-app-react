import { Link } from "react-router-dom";

import "../styles.css";

function About() {
  return (
    <section>
      <h2>Bienvenido a la página About</h2>
      <p>Esta es una ruta secundaria</p>
      <Link to="/" className="nav-item">
        Ir a Home
      </Link>
    </section>
  );
}

export default About;
