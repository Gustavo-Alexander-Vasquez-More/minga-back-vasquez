import { Router } from "express";
import create from "../controllers/chapters/create.js";
import addCoverPhotoMiddleware from "../middlewares/add_cover_photo.js";
import validadorChapter from "../schemas/chapter/validadorChapter.js"
import validadorEditChapter from "../schemas/chapter/validatorEditChapter.js";
import validator from "../middlewares/validator.js";
import isPropertyOf from "../middlewares/is_property_of.js";
import passport from "../middlewares/passport.js";
import exists_order from "../middlewares/exists_order.js";
import new_read from "../controllers/chapters/new_read.js"
import get_me from "../controllers/chapters/get_me.js";
import read from "../controllers/authors/read.js";
import isProperty from "../middlewares/is_property.js"
import destroy from "../controllers/chapters/destroy.js";
import update from "../controllers/chapters/update.js";
import multer from "multer";
const upload = multer({ dest:'uploads/'});
const chapter_router=Router()
//DSdfsdfdasf//
chapter_router.get('/',new_read)
chapter_router.get('/me' , passport.authenticate('jwt',{session:false}), get_me)
chapter_router.delete('/:id',passport.authenticate('jwt',{session:false}), destroy)
chapter_router.put('/:id', validator(validadorEditChapter), upload.single('cover_photo') ,update)
chapter_router.post('/:id', passport.authenticate('jwt',{session: false}),isPropertyOf ,create)
export default chapter_router
