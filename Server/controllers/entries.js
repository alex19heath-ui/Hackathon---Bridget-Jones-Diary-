import Entry from "../models/Entry.js"

async function index(req, res) {
  try {
    console.log("running index() from entries controller")
    const entries = await Entry.getAll()
    res.status(200).json(entries)
    console.log("returning successful index() from entries controller")
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

async function show(req, res) {
  try {
    console.log("running show() from entries controller")
    const entry = await Entry.getById(req.params.id)
    res.status(200).json(entry)
    console.log("returning successful show() from entries controller")
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

async function create(req, res) {
  try {
    console.log("running create() from entries controller")
    const { title, body } = req.body
    const newEntry = await Entry.create({ title, body })
    res.status(201).json(newEntry)
    console.log("returning successful create() from entries controller")
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export default {
  index,
  show,
  create,
}
