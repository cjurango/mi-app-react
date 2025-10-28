import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import { useTheme } from "../../hooks/useTheme";

function LoginForm() {
  const { theme } = useTheme();

  const {
    values: { username, password },
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useForm(
    {
      username: "",
      password: "",
    },
    {
      username: { required: true },
      password: { required: true, minLength: 6 },
    }
  );
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async () => {
    await login(username, password);
    navigate("/", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => handleChange("username", e.target.value)}
      />
      {errors.username && <p className="error">{errors.username}</p>}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => handleChange("password", e.target.value)}
      />
      {errors.password && <p className="error">{errors.password}</p>}
      <button
        disabled={isSubmitting}
        type="submit"
        style={{
          backgroundColor: theme === "dark" ? "#333" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
        }}
      >
        {isSubmitting ? "Ingresando..." : "Ingresar"}
      </button>
    </form>
  );
}

export default LoginForm;
