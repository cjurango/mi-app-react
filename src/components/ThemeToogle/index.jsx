import { useTheme } from "../../hooks/useTheme";

function ThemeToogle() {
  const { theme, toggleTheme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <button onClick={handleToggleTheme}>
      {theme === "light" ? "Cambiar a Dark Mode" : "Cambiar a Light Mode"}
    </button>
  );
}

export default ThemeToogle;
