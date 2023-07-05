import { Schema, model } from "mongoose";

let collection='users'
let schema =new Schema({
    email: { type:String,required:true },
    password: { type:String,required:true },
    photo: { type:String,required:true },
    role: { type:Number,required:false },
    online: { type:Boolean },
    verified: { type:Boolean,required:false },
    verify_code: { type:String,required:false }   
},{
    timestamps:true
})
let User= model(collection, schema)
export default User