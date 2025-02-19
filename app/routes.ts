import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("/demos", "routes/demos.tsx"), route("/contact", "routes/contact.tsx")] satisfies RouteConfig;
