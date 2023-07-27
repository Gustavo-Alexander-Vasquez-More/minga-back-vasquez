import bcryptjs from "bcryptjs"

export default (req,res,next)=> {
    let password = req.body.password
    console.log(req.body);
    console.log(req.files);
    console.log(req.file);
    let hash = bcryptjs.hashSync(password, 15)
    req.body.password = hash;

    next();
}