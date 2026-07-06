import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  const [isDark, setIsDark] = useState(()=>{
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

useEffect(() => {
    localStorage.setItem("theme", isDark? "dark" : "light");
}, [isDark]);

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}