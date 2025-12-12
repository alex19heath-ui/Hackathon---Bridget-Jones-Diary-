import db from "../database/connect"

class Entry {
    constructor({id, title, body, createdAt, updatedAt}) {
        this.id = id
        this.title = title
        this.body = body
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    static async getAll() {
        console.log("running getAll() from model")

        const res = await db.query()
    }
}