import { isRouteErrorResponse, Links, Meta, Outlet, BrowserRouter, Scripts, ScrollRestoration } from "react-router";

import type { Route } from "./+types/root";
import "./globals.css";
import "./app.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { ThemeProvider, useTheme } from "./ThemeContext";


export const links: Route.LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },

  {
    rel: "preload",
    href: "https://fonts.googleapis.com/css2?family=Faustina:ital,wght@0,300..800;1,300..800&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
    as: "style",
  },

  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Faustina:ital,wght@0,300..800;1,300..800&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
  },
  {
    rel: "preload",
    href: "/.netlify/entry.client-Crbb1COA.js",
    as: "script",
  },
];

export function Layout() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider>
          <ThemedLayout></ThemedLayout>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html >
  );
}
function ThemedLayout() {
  const { theme } = useTheme();
  return (<div className={theme === 'light' ? 'dark' : 'light'}>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
  </ div>)
}

export default function App() {
  return (
    <Outlet></Outlet>
  );
}


export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
