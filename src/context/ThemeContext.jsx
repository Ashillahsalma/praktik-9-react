import { createContext, useState, useContext } from "react";

// Membuat Theme Context
const ThemeContext = createContext();

// Custom Hook untuk menggunakan Theme Context
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Function toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Value yang dikirim ke seluruh komponen
  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className={`app ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
