import {Router} from "express"
import read  from "../controllers/mangas/read.js"
import create from "../controllers/mangas/create.js"
import validator from "../middlewares/validator.js"
import mangaValidation from "../schemas/Manga/mangaVal.js"
/*import is_property_of from "../middlewares/is_property_of.js"*/

const manga_router=Router()
manga_router.get('/', read)
manga_router.post('/mangaC',validator(mangaValidation), create);
//manga_router.put()
//manga_router.delete()
export default manga_router