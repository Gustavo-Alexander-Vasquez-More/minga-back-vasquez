import validadorChapter from "../schemas/chapter/validadorChapter.js"; 

export default async(req, res, next) => {
    let id =    await  validadorChapter.findOne({manga_id: req.body.manga_id})
    let order = await  validadorChapter.findOne({order: req.body.order})
    if (req.body.manga_id && req.body.order){
        return res.status(400).json({
            message: 'access denied!!!'
        })
    }else{
        next();
    }
}