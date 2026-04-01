import type { Express } from "express";
import { converter } from "./converter-routes.js";

const routes = (app: Express) => {
    app.use(converter);
}

export { routes };