import { Router } from "express";
import read from "../controllers/chapters/read.js";
import create from "../controllers/chapters/create.js";
import addCoverPhotoMiddleware from "../middlewares/add_cover_photo.js";
import validadorChapter from "../schemas/chapter/validadorChapter.js";
import validator from "../middlewares/validator.js";
import is_property_of from "../middlewares/is_property_of.js";
import passport from "../middlewares/passport.js";

const chapter_router=Router()
//chapter_router.post()
chapter_router.get('/', read)
chapter_router.post('/chapterC',addCoverPhotoMiddleware,validator(validadorChapter),is_property_of, create)
//chapter_router.delete()
export default chapter_router
