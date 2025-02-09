import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";
import { ThemeProvider, useTheme } from "./ThemeContext";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import "./globals.css";
import Demos from "./routes/demos";
import About from "./routes/about";
import Contact from "./routes/contact";

// export function App() {
//   return (
//     <ThemeProvider><Layout></Layout></ThemeProvider>
//   )
// }
export function App() {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route index element={<Main></Main>}></Route>
        <Route path="demos" element={<Demos></Demos>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
      </Route>
    </Routes>
  );
}

const Layout = () => {
  const { theme } = useTheme();
  return (
    <Outlet></Outlet>
  );
};
