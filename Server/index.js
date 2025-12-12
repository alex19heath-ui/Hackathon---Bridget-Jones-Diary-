import app from "./app.js"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.port

app.listen(port, () => {
  console.log(`Hackathon---Bridget-Jones-Diary is running on ${port}`)
})
