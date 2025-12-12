import db from "../database/connect.js"
import { EntryTable } from "../database/schemas/entry.js"
import { sql } from 'drizzle-orm' 



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
    await db.execute(
      sql`select * from ${EntryTable}`,
    )

    if (!rows || rows.length === 0) {
      throw new Error("No entries available.")
    }

    console.log("returning getAll() from model")
    return rows.map((entry) => new Entry(entry))
  }

  static async getById(id) {
    const rows = await db
      .select()
      .from(EntryTable)
      .where(EntryTable.id.equals(id))
    if (!rows || rows.length === 0) {
      throw new Error("Entry not found")
    }
    return new Entry(rows[0])
  }

  static async create({ title, body }) {
    const [inserted] = await db
      .insert(EntryTable)
      .values({ title, body })
      .returning()
    return new Entry(inserted)
  }
}

export default Entry
