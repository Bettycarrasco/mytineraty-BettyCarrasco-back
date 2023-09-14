import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    Photo: { type: String, default: 'https://www.pngmart.com/files/22/User-Avatar-Profile-Transparent-Isolated-PNG.png' },

});
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.password, salt);
        this.password = hashPassword;
        return next();
    } catch (error) {
        return next(error);
    }
});

userSchema.methods.toJSON = function () {
    const userObject = this.toObject();
    delete userObject.password; 
    return userObject;
};

const User = mongoose.model('user', userSchema)

export default User