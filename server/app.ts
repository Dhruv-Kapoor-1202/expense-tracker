import { Hono } from "hono";
import { logger } from "hono/logger";
import { expensesRoute } from "./routes/expenses";
import { serveStatic } from "hono/bun";
import { handle } from "hono/vercel";

const app = new Hono();

app.use("*", logger());

app.route("/api/expenses", expensesRoute);

app.get("*", serveStatic({ root: "./frontend/dist" }));
app.get("*", serveStatic({ path: "./frontend/dist/index.html" }));

export const GET = handle(app);
export const POST = handle(app);

export default app;
