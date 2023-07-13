import { Schema,model,Types } from 'mongoose'

let collection = 'mangas'
let schema = new Schema({
 author_id:{type:Types.ObjectId,
    ref: 'authors',
    require:true,},
    title:{type:String, require:true},
    cover_photo:{type:String, require: true},
    description:{type:String, require:true},
    category_id:{type:Types.ObjectId,
        ref: 'categories',
        require:true,},
},{
    timestamps:true,
})

const Manga = model(collection,schema)
export default Manga;
