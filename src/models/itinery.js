import { Schema, model } from "mongoose";

const itinerarySchema = Schema({
    name: {type: "String", required: true},
    cityId: {tipe: SchemaObjectId, ref:cityShema, required: true},
    userId: {type: SchemaObjectId, ref:userShema, required: true},
    price: {type: Number, require: true, min:1, max:5}, //todo limitar de 1 a 5
    duration: {type: Number, requiere: true},
    likes: {type: Number, default:0},
    tematicHashtags: [String],
    Comments: {type: Schema.ObjectId, ref:CommentsSchema}

},{
    Timestamps: true
})

const Itinerary = model('itineraries', itinerarySchema);
export default Itinerary