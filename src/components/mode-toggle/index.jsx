import { useEffect, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../theme/use-theme";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };

  return (
    <Tooltip title={`Switch to ${isDark ? "Light" : "Dark"} mode`}>
      <IconButton onClick={toggleTheme}  color="inherit">
        {isDark ? (
          <Moon className="h-5 w-5  text-foreground" />
        ) : (
          <Sun className="h-5 w-5 text-foreground" />
        )}
        <span className="sr-only">Toggle theme</span>
      </IconButton>
    </Tooltip>
  );
}
