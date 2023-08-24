import { Schema, model } from "mongoose";

const commentSchema = Schema({
    field: {type: String, required: true},
    userId: {type: SchemaObjectId, ref:userShema, required: true}
},{
    Timestamps: true
})

const Comment = model('comments', commentSchema);
export default Comment