import { Router } from "express"
import entryController from "../controllers/entries.js"

const entryRouter = Router()

entryRouter.get("/", entryController.index) // list all entries
entryRouter.post("/", entryController.create) // create new entry

entryRouter.get("/:id", entryController.show) // list specific entry

export default entryRouter
