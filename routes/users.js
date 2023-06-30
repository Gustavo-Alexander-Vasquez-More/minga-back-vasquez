import { Router } from "express";

import register from "../controllers/users/register.js";

import create from "../controllers/chapters/create.js";

import read from "../controllers/users/read.js";
const user_router = Router()
//user_router.post()
user_router.get('/', read)

user_router.post('/signup', register)
//user_router.put()
//user_router.delete()
export default user_router