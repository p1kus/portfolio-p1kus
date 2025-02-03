import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { ThemeToggleButton } from "./components/buttons/themeToggleButton";

export function App() {
  return (
    <div className="">
      <main className="landingPage-main">
        <Header />
        <Footer />
      </main>
    </div>
  );
}
