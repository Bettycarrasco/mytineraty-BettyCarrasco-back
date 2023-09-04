import { Schema, model } from "mongoose";

const activitySchema = Schema({
    // itineraryId: {type: Schema.ObjectId, ref:'itinerary', required: true},
    // likes: {type: Number, default:0},
    // tematicHashtags: [String],
    // comments: {type: String },
    description:{type: String},
},{
    Timestamps: true
})

const Activity = model('activities', activitySchema);
export default Activity