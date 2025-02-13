import { createContext, useContext, useState } from "react";

interface ThemeContextType {
  theme: string;
  language: string;
  toggleTheme: () => void;
  setLanguage: (lang: 'en' | 'pl') => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  language: "en",
  toggleTheme: () => { },
  setLanguage: () => { },
});
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return <ThemeContext.Provider value={{ theme, toggleTheme, language, setLanguage }}>{children}</ThemeContext.Provider>
};

export const useTheme = () => useContext(ThemeContext);
