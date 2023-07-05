import Chapter from '../../models/Chapter.js'
export default async (req, res)=>{
    try {
        const chapter=await Chapter.create(req.body);
        return res.status(201).json({
            response:chapter,
            success:true,
            message:'Manga created',
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            response:null,
            success:false,
            message:error.message
        })
    }
}