import type { Route } from "./+types/home";
import { App } from "../app";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Piotr Popiolek" }, { name: "description", content: "Portfolio Page" }];
}

export default function Demos() {
  return (
    <>
      <h2>About</h2>
    </>
  );
}
