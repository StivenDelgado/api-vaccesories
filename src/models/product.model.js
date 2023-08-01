import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    price:{
        type: Number,
        required: true,
    },
    type:{
        type: String,
        required: true,
        trim: true
    },
    color:{
        type: String,
        required: true,
        trim: true
    },
    amount:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        trim: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
},
{
    timestamps: true
})

export default mongoose.model('products', productsSchema)