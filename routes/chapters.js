import { Router } from "express";
import read from "../controllers/chapters/read.js";
import create from "../controllers/chapters/create.js";
import addCoverPhotoMiddleware from "../middlewares/add_cover_photo.js";
import validator from "../middlewares/validator.js";
import validadorChapter from "../schemas/Manga/chapter/validadorChapter.js";
const chapter_router=Router()
chapter_router.get('/', read)
//chapter_router.post('/', addCoverPhotoMiddleware, create)//
chapter_router.post('/chapterC',validator(validadorChapter), create);
//chapter_router.delete()
export default chapter_router