import { Main } from "./components/main/main";
import { useTheme } from "./ThemeContext";
import { Routes, Route, Outlet } from "react-router";
import "./globals.css";
import "./app.css"
import Demos from "./routes/demos";
import Contact from "./routes/contact";

export function App() {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route index element={<Main></Main>}></Route>
        <Route path="demos" element={<Demos></Demos>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
      </Route>
    </Routes>
  );
}

const Layout = () => {
  return (
    <Outlet></Outlet>
  );
};
