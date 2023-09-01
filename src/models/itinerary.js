import { Schema, model } from "mongoose";

const itinerarySchema = Schema({
    cityId: {type: Schema.ObjectId, ref:'cities', required: true},
    name: {type: String, required: true},
    itineraryId: {type: Schema.ObjectId, ref:'itinerary', required: true},
    userName: {type: String, required: true},
    photoUser:{type: String, required: true},
    price: {type: Number, required: true, min:1, max:5}, 
    duration: {type: Number, required: true},
    likes: {type: Number, default:0},
    tematicHashtags: [{String}],
    comments: {type: String },
},{
    Timestamps: true
})

const Itinerary = model('itineraries', itinerarySchema);
export default Itinerary