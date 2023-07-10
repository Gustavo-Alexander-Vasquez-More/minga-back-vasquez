import Chapter from '../../models/Chapter.js'
export default async (req, res)=>{
    try {
        const chapter=await Chapter.create(req.body);
        return res.status(201).json({
            response:chapter,
            success:true,
            message:'Chapter created',
        })
    } catch (error) {
       next(error)
    }
}