import * as schema from "./schema.js"
import { drizzle } from "drizzle-orm/node-postgres"

const db = drizzle({
  schema,
  connection: {
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
  },
})

console.log("DB connection established.")

export default db