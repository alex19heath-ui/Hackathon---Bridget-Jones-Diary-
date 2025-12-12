import * as schema from "./schema"
import { drizzle } from "drizzle-orm/node-postgres"

export const db = drizzle({
    schema,
    connection: {
        password: process.env.DB_PASSWORD,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
    }
})

console.log("DB connection established.");