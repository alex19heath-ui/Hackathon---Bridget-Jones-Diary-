import dotenv from "dotenv"
dotenv.config()

const app = require("./app")
const port = process.env.port

app.listen(port, () => {
  console.log(`Hackathon---Bridget-Jones-Diary is running on ${port}`)
})
