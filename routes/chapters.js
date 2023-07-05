import { Router } from "express";
import read from "../controllers/chapters/read.js";
import create from "../controllers/chapters/create.js";
import addCoverPhotoMiddleware from "../middlewares/add_cover_photo.js";
import validadorChapter from "../schemas/chapter/validadorChapter.js";
import validator from "../middlewares/validator.js";

const chapter_router=Router()
//chapter_router.post()
chapter_router.get('/', read)
chapter_router.post('/', create)
//chapter_router.post()
//chapter_router.delete()
chapter_router.post('/chapterC', addCoverPhotoMiddleware,validator(validadorChapter), create)
export default chapter_router
