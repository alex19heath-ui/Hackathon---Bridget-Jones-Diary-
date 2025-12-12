import express from "express"
import cors from "cors"
import entryRouter from "./routes/entry"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  console.log("running index from app.js");
  res.status(200).json({
    title: "Bridget Jones Diary API",
    description: "Welcome to the Bridget Jones Diary API!",
  })
})

app.use("/entries", entryRouter)

export default app