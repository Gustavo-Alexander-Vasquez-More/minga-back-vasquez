import {Router} from "express"
import read  from "../controllers/mangas/read.js"
import create from "../controllers/mangas/create.js"
import validator from "../middlewares/validator.js"
import mangaValidation from "../schemas/Manga/mangaVal.js"
import mangaExists from "../middlewares/mangaExists.js"
import passport from "../middlewares/passport.js"
const manga_router=Router()
manga_router.get('/', read)
manga_router.post('/mangaC',validator(mangaValidation), passport.authenticate('jwt',{ session:false }), mangaExists, create);

export default manga_router