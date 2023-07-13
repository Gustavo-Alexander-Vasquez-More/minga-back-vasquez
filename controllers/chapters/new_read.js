import Chapter from "../../models/Chapter.js"

async function read (req, res, next){
    
    try {
        const mangaId = req.query.manga_id;
        const queries={manga_id:mangaId}
        
        let pagination={page:1, limit:6}
        if (req.query.page){
           pagination.page= req.query.page
        }
        if(req.query.limit){
           pagination.limit=req.query.limit
        }
    let totalPages=await Chapter.countDocuments()
        let chapters= await Chapter.find(queries,'manga_id').sort({ order: 1})
    .select("title cover_photo")
    .skip( pagination.page > 0 ? (pagination.page-1)*pagination.limit : 0 )
                .limit( pagination.limit > 0 ? pagination.limit : 0 )
                const prevPage = pagination.page > 1 ? Number(pagination.page) - 1 : null;
                
                const nextPage = pagination.page < totalPages ? Number(pagination.page) + 1 : null;
            
return res.status(200).json({
    success:true,
    chapters:chapters,
    prev:prevPage,
    next:nextPage
})
    } catch (error) {
      next(error)  
    }
}
export default read
/*SDsdasdsffsf*/