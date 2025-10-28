import useLocalStorage from "../../hooks/useLocalStorage";

function ThemeToogle() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={handleToggleTheme}>
      {theme === "light" ? "Cambiar a Dark Mode" : "Cambiar a Light Mode"}
    </button>
  );
}

export default ThemeToogle;
