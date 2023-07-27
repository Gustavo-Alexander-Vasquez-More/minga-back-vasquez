import Chapter from '../../models/Chapter.js'
export default async (req, res, next)=>{
    try {
        const chapter=await Chapter.create({ manga_id: req.params.id });;
        return res.status(201).json({
            response:chapter,
            success:true,
            message:'Chapter created',
        })
    } catch (error) {
       next(error)
    }
}