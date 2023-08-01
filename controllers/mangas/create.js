import Manga from "../../models/Manga.js"

export default async (req, res) => {
    try {
        const photoUrl=req.file ?  req.file.path : null
        const one = await Manga.create({...req.body , cover_photo:photoUrl});
        const imageUrl= photoUrl.replace('\\','/')
        return res.status(201).json({
            response:{...one._doc , cover_photo:imageUrl},       
            success: true,         
            message: 'Manga created'
        })
    } catch (error) {
        console.log(error)                  //consologueo el error      
        return res.status(500).json({       //envío al cliente OTRA respuesta con los datos que quiera          
            response:null,            
            success:false,     
            message:error.message
        })
    }
}