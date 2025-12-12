import db from "../database/connect.js"
import { EntryTable } from "../database/schemas/entry.js"
import { eq, desc } from "drizzle-orm"
class Entry {
  constructor({ id, title, body, createdAt, updatedAt }) {
    this.id = id
    this.title = title
    this.body = body
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  static async getAll() {
    console.log("running getAll() from model")

    // SELECT * FROM entry
    const rows = await db
      .select()
      .from(EntryTable)
      .orderBy(desc(EntryTable.createdAt))

    if (!rows || rows.length === 0) {
      throw new Error("No entries available.")
    }

    console.log("returning getAll() from model")
    return rows.map((entry) => new Entry(entry))
  }

  static async getById(id) {
    console.log("running getById() from model")
    const rows = await db.select().from(EntryTable).where(eq(EntryTable.id, id))
    if (!rows || rows.length === 0) {
      throw new Error("Entry not found")
    }
    console.log("returning getById() from model")
    return new Entry(rows[0])
  }

  static async create({ title, body }) {
    console.log("returning create() from model")

    const response = await db
      .insert(EntryTable)
      .values({
        title,
        body,
      })
      .returning()
      console.log("returning create() from model")
    return new Entry(response[0])
  }
}

export default Entry
