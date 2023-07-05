import Manga from '../models/Manga.js'

async function is_property_of  (req,res,next){
    const manga = await Manga.findById( req.params.id )
    if(!manga){
        return next()
    }
    return res.status(400).json({
        success: false,
        message: 'No matches found'
    })
}
export default is_property_of