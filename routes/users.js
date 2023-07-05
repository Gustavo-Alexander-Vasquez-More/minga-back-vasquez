import { Router } from "express";
import register from "../controllers/users/register.js";
import validator from "../middlewares/validator.js";
import userSignup from "../schemas/users/signup.js";
import signin from "../controllers/users/signin.js";
import accountExists from "../middlewares/accountExists.js";
import passport from "../middlewares/passport.js";
import passwordIsOk from "../middlewares/passwordIsOk.js";
import accountNotExists from "../middlewares/accountNotExists.js";
import read from "../controllers/users/read.js";
import createHash from "../middlewares/createHash.js";
import generateToken from "../middlewares/generateToken.js";
import signout from "../controllers/users/signout.js";


const user_router = Router()
//user_router.post()
user_router.get('/', read)

user_router.post('/register', validator(userSignup), accountExists, createHash , register)
user_router.post('/signin'/* validator(schemaSignin) */, accountNotExists, passwordIsOk, generateToken, signin)
user_router.post('/signout',passport.authenticate('jwt',{ session:false }),signout)
//user_router.put()
//user_router.delete()
export default user_router