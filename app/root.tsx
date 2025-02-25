import { isRouteErrorResponse, Links, Meta, Outlet, BrowserRouter, Scripts, ScrollRestoration } from "react-router";

import type { Route } from "./+types/root";
import "./globals.css";
import "./app.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { preload } from "react-dom";

export const links: Route.LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.cdnfonts.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "https://fonts.cdnfonts.com/css/switzer",
    as: "font",
    type: "font/woff2"
  },
  {
    rel: "preload",
    href: "https://fonts.cdnfonts.com/css/faustina-2",
    as: "font",
    type: "font/woff2"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.cdnfonts.com/css/switzer",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.cdnfonts.com/css/faustina-2",
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
  preload("https://fonts.cdnfonts.com/css/switzer", { as: "font" }),
    preload("https://fonts.cdnfonts.com/css/faustina-2", { as: "font" })
  return (<div className={theme === 'light' ? 'dark' : 'light'}>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
  </ div>)
}

export default function App() {
  <BrowserRouter>
    <Outlet></Outlet>
  </BrowserRouter>
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
