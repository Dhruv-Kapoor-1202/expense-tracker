// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   schema: "./server/db/schema/*",
//   out: "./drizzle",
//   dialect: "postgresql", // 'postgresql' | 'mysql' | 'sqlite'
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL!,
//   },
// });

import type { Config } from "drizzle-kit";

export default {
  schema: "./server/db/schema/*",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
