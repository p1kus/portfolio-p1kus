import type { Route } from "./+types/home";
import { App } from "../app";
import { ContactPage } from "~/components/contactPage/contactPage";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Piotr Popiolek" }, { name: "description", content: "Portfolio Page" }];
}

export default function Contact() {
  return <ContactPage />;
}
