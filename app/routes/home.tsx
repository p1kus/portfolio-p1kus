import type { Route } from "./+types/home";
import { App } from "../app";
import { Main } from "~/components/main/main";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Piotr Popiolek" }, { name: "description", content: "Portfolio Page" }];
}

export default function Home() {
  return <Main />;
}
