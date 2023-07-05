import bcryptjs from "bcryptjs"

export default (req,res,next)=> {
    let password = req.body.password
    let hash = bcryptjs.hashSync(password)
    req.body.password = hash
    next()
}