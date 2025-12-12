import express from "express"
import cors from "cors"
import entryRouter from "./routes/entry"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/entries", entryRouter)

export default app