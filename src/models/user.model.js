import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    role: {
        type: String,
    }
},
{
    timestamps: true
})  

export default mongoose.model('users', userSchema)