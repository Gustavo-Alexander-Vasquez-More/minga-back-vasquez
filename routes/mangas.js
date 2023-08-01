import {Router} from "express"
import read from "../controllers/mangas/read.js"
import create from "../controllers/mangas/create.js"
import validator from "../middlewares/validator.js"
import mangaValidation from "../schemas/Manga/mangaVal.js"
import mangaExists from "../middlewares/mangaExists.js"
import passport from "../middlewares/passport.js"
import readOne from "../controllers/mangas/read_one.js"
import multer from "multer";
const upload = multer({ dest:'uploads/'});
const manga_router=Router()
manga_router.get('/', read)
manga_router.get('/:id', passport.authenticate('jwt',{ session:false }) , readOne)
manga_router.post('/mangasC',upload.single('cover_photo'),create);

export default manga_router