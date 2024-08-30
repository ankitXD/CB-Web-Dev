import { createContext, useEffect, useState } from "react";

// Create the context
export const ThemeContext = createContext();

// Create the provider component
export function ThemeProvider() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* {children} */}
    </ThemeContext.Provider>
  );
}