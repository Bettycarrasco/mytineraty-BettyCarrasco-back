import { Schema, model } from "mongoose";

const itinerarySchema = Schema({
    name: {type: String, required: true},
    userName: {type: String, required: true},
    photoUser:{type: String, required: true},
    cityId: {type: Schema.ObjectId, ref:'cities', required: true},
    price: {type: Number, required: true, min:1, max:5}, 
    duration: {type: Number, required: true},
    likes: {type: Number, default:0},
    tematicHashtags: [String],
    Comments: {type: String }
},{
    Timestamps: true
})

const Itinerary = model('itineraries', itinerarySchema);
export default Itinerary