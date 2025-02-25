import { createContext, useContext, useEffect, useState } from "react";

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
const DEFAULT_THEME = 'dark';
const DEFAULT_LANGUAGE = "en";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme || DEFAULT_THEME;
    }
    return DEFAULT_THEME;
  });
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language');
      return savedLang || DEFAULT_LANGUAGE;
    }
    return DEFAULT_LANGUAGE;
  });


  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("theme", theme);
    }
  }, [theme])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language])
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return <ThemeContext.Provider value={{ theme, toggleTheme, language, setLanguage }}>{children}</ThemeContext.Provider>
};

export const useTheme = () => useContext(ThemeContext);
