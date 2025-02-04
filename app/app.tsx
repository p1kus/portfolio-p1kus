import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./globals.css";

const AppContent = () => {
  const { theme } = useTheme();
  return (
    <div className={theme === "light" ? "dark" : "light"}>
      <main>
        <Header />
        <Footer />
      </main>
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <AppContent></AppContent>
    </ThemeProvider>
  );
}
