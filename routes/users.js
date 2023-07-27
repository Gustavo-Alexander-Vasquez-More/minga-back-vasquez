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
import signinSchema from "../schemas/users/signinSchema.js";

import multer from "multer";

const upload = multer({ dest:'uploads/'});

const user_router = Router()
user_router.get('/', read)
user_router.post('/register',/*validator(userSignup),*/ upload.single('photo') , accountExists,createHash , register )
user_router.post('/signin', validator(signinSchema) , accountNotExists, passwordIsOk, generateToken, signin)
user_router.post('/signout',passport.authenticate('jwt',{ session:false }),signout)

export default user_router