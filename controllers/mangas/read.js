import User from '../../models/User.js'
export default async(req, res)=>{
    try {
        let all = await User.find()       //espero la busqueda de todos los autores
        if (all) {                          //que hago si encuentro autores?
            return res.status(200).json({   //envío al cliente una respuesta con los datos que quiera
                response:all,
                success:true,
                message:'you have requested GET /api/users/',
                mindhub:'the best',
                date: new Date()
            })
        } else {                            //que hago si NO encuentro autores
            return res.status(404).json({   //envio al cliente OTRA respuesta con los datos que quiera
                response:null,
                success:false,
                message:'not found users',
                mindhub:'the best',
                date: new Date()
            })
        }
    } catch (error) {                       //que hago si no puedo INTENTAR buscar algo y salta el catch
        console.log(error)                  //consologueo el error
        return res.status(500).json({       //envío al cliente OTRA respuesta con los datos que quiera
            response:null,
            success:false,
            message:error.message
        })
    }
}