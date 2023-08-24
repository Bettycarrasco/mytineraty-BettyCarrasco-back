import { Schema, model } from "mongoose";

const userSchema = Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    mail: {type: String, required: true},
    photo: {type: String, required: true},
    country: {type: String, required: true},
    password: {type: String, required: true},
    rol: {type: String, default: "user"}
    
},{
    Timestamps: true
})

const User = model('users', userSchema);
export default User