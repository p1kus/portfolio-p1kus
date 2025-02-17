import type { Route } from "./+types/home";
import { App } from "../app";
import { DemosPage } from "~/components/demosPage/demosPage";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Piotr Popiolek" }, { name: "description", content: "Portfolio Page" }];
}

export default function Demos() {
  return (
    <DemosPage></DemosPage>
  );
}
