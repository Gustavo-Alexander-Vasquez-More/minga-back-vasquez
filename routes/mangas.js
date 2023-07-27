import {Router} from "express"
import read from "../controllers/mangas/read.js"
import create from "../controllers/mangas/create.js"
import validator from "../middlewares/validator.js"
import mangaValidation from "../schemas/Manga/mangaVal.js"
import mangaExists from "../middlewares/mangaExists.js"
import passport from "../middlewares/passport.js"
import readOne from "../controllers/mangas/read_one.js"
const manga_router=Router()
manga_router.get('/', read)
manga_router.get('/:id', passport.authenticate('jwt',{ session:false }) , readOne)
manga_router.post('/',passport.authenticate('jwt',{ session:false }) ,validator(mangaValidation), mangaExists, create);

export default manga_router