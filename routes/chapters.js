import { Router } from "express";
import read from "../controllers/chapters/read.js";
import create from "../controllers/chapters/create.js";
import addCoverPhotoMiddleware from "../middlewares/add_cover_photo.js";
const chapter_router=Router()
chapter_router.get('/', read)
chapter_router.post('/', addCoverPhotoMiddleware, create)
//chapter_router.delete()
export default chapter_router