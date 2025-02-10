import type { Route } from "./+types/home";
import { AboutPage } from "~/components/aboutPage/aboutPage";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Piotr Popiolek" }, { name: "description", content: "Portfolio Page" }];
}

export default function About() {
  return (
    <AboutPage></AboutPage>
  );
}
