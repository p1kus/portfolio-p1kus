import type { Route } from "./+types/home";
import { App } from "../app";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Piotr Popiolek" }, { name: "description", content: "Portfolio Page" }];
}

export default function Contact() {
  return <App />;
}
