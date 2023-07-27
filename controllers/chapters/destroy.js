import Chapter from "../../models/Chapter.js"

export default async(req,res,next)=> {

try {
        let destroyed = await Chapter.deleteOne
        ({ _id: req.params.id });
        if (destroyed.deletedCount){
        return res.status(200).json({ response: destroyed })
        } 
    } catch(error) {
        next(error)
    }
}