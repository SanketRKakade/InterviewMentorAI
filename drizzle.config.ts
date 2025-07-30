// import { defineConfig } from "drizzle-kit";
// import "dotenv/config";

// const URL = process.env.DRIZZLE_DATABASE_URL as string;

// export default defineConfig({
//   schema: "./config/database/schema.ts",
//   out: "./drizzle",
//   dialect: 'postgresql',
//   dbCredentials: {
//     url: URL,
//   }
// });

import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./config/database/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DRIZZLE_DATABASE_URL!,
  },
});