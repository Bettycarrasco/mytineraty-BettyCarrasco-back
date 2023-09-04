import { Schema, model } from "mongoose";

const itinerarySchema = Schema({
    cityId: {type: Schema.ObjectId, ref:'cities', required: true},
    photo: {type: String, required: true},
    name: {type: String, required: true},
    userName: {type: String, required: true},
    photoUser:{type: String, required: true},
    price: {type: Number, required: true, min:1, max:5}, 
    duration: {type: Number, required: true},
    likes: {type: Number, default:0},
    tematicHashtags: [String]
},{
    Timestamps: true
})

const Itinerary = model('itineraries', itinerarySchema);
export default Itinerary