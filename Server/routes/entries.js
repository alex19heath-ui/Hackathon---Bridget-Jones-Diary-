import { Router } from "express"
import entryController from "../controllers/entries.js"

const entryRouter = Router();

entryRouter.get("/", entryController.index);

export default entryRouter;