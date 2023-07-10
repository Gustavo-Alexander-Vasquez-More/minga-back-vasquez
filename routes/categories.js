import {Router} from "express"
import read from "../controllers/categories/read.js"
const category_router=Router()

category_router.get('/', read)

export default category_router