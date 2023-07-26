import {Router} from "express"
import read  from "../controllers/mangas/read.js"
import create from "../controllers/mangas/create.js"
import validator from "../middlewares/validator.js"
import mangaValidation from "../schemas/Manga/mangaVal.js"
import update from "../controllers/mangas/update.js"
import get_me from "../controllers/mangas/get_me.js"
import deleteOne from "../controllers/mangas/deleteOne.js"
/*import is_property_of from "../middlewares/is_property_of.js"*/

const manga_router=Router()
manga_router.post('/mangaC',validator(mangaValidation), create);
manga_router.get('/', read)
manga_router.get('/:id', get_me)
manga_router.put('/:id', update)
manga_router.delete('/:id', deleteOne)
//manga_router.put()
//manga_router.delete()
export default manga_router