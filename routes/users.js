import { Router } from "express";
import read from "../controllers/users/read.js";
import register from "../controllers/users/register.js";
import create from "../controllers/chapters/create.js";
const user_router = Router()
user_router.get('/', read)
user_router.post('/signup', create, register)
//user_router.put()
//user_router.delete()
export default user_router