import {Schema, model, Types} from "mongoose"

let colecction = "categories"
let schema = new Schema({
    name:{type:String, required:true},
    color:{type:String, required:true},
    hover:{type:String, required:true},
    description:{type:String, required:true},
    cover_photo:{type:String, required:true},
    character_photo:{type:String, required:true},
    admin_id:{type:Types.ObjectId, ref:"users" , required:true },
}, {
    timestamps:true
})

const Category = model(colecction, schema)
export default Category