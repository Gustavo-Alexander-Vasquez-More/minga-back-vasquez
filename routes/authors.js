import { Router } from "express"
import read from "../controllers/authors/read.js"


const author_router = Router()

author_router.get('/', read)

export default author_router