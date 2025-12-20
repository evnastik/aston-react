import { useTheme } from "../../../shared/lib/theme/ThemeContext";
import styles from "./ThemeSwitcher.module.css";
import { Button } from "../../../shared/ui/Button/Button";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const className = (theme === "dark") ? styles.button_dark : styles.button;

  return (
    <Button className={className} onClick={toggleTheme}>
      {theme === "dark" ? "Светлая тема" : "Темная тема"}
    </Button>
  );
};