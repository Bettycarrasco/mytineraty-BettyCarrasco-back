import mongoose from "mongoose";
const { Schema } = mongoose;

const citySchema = new Schema({
    city: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

const City = mongoose.model('cities', citySchema);
export default City