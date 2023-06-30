import { Router } from "express";
import read from "../controllers/chapters/read.js";
import create from "../controllers/chapters/create.js";
const chapter_router=Router()
//chapter_router.post()
chapter_router.get('/', read)
chapter_router.post('/', create)
//chapter_router.post()
//chapter_router.delete()
export default chapter_router