import { Schema, model } from "mongoose";
//cluster: conjunto de base de datos(el link de mongo)
//conjunto de colecciones(coleccion hace referencia a recurso y recurso hace referencia a modelos de datos que necesita mi aplicacion)
//coleccion:conjunto de documentos
//colecciones: usuarios,productos, carritos
//documento: al dato
let collection='users'
let schema =new Schema({
    email: { type:String,required:true },
    password: { type:String,required:true },
    photo: { type:String,required:true },
    role: { type:Number,required:true },
    online: { type:Boolean },
    verified: { type:Boolean,required:true },
    verify_code: { type:String,required:true }   
},{
    timestamps:true
})
let User= model(collection, schema)
export default User