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
    const entry = await Entry.getById(req.params.id)
    res.status(200).json(entry)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

async function create(req, res) {
  try {
    const { title, body } = req.body
    const newEntry = await Entry.create({ title, body })
    res.status(201).json(newEntry)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export default {
  index,
  show,
  create,
}