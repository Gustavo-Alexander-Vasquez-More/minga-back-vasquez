import { Router } from "express";
import read from "../controllers/chapters/read.js";
import create from "../controllers/chapters/create.js";
import addCoverPhotoMiddleware from "../middlewares/add_cover_photo.js";
import validadorChapter from "../schemas/chapter/validadorChapter.js";
import validator from "../middlewares/validator.js";
import is_property_of from "../middlewares/is_property_of.js";
import passport from "../middlewares/passport.js";
import exists_order from "../middlewares/exists_order.js";


const chapter_router=Router()

chapter_router.get('/', passport.authenticate('jwt',{session:false}),  read)
chapter_router.post('/chapterC',addCoverPhotoMiddleware,validator(validadorChapter),is_property_of, exists_order , create)
export default chapter_router
