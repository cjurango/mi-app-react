import LoginForm from "../../components/LoginForm";
import ThemeToogle from "../../components/ThemeToogle";

function Login() {
  return (
    <>
      <ThemeToogle />
      <h1>Login</h1>
      <p>Ingrese su email y contraseña para iniciar sesión:</p>
      <LoginForm />
    </>
  );
}

export default Login;
