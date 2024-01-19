import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        default: "Staff"
    },
    isActive: {
        type: Boolean,
        default: true,
    },
},
    { timestamps: true }
)

const npsSchema = new mongoose.Schema({
    bu: {
        type: String,
        required: true,
        unique: true,
        min: 2,
        max: 20,
    },
    question: {
        type: String,
    },
    score: {
        type: Number,
        required: true,
        min: 1,
    },
    reply: {
        type: String,
    },
    agent: {
        type: String,
    }

},
    { timestamps: true }
)