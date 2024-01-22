import { Schema, mongoose } from "mongoose";

const userSchema = new Schema({
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
        min: 1,
        max: 20,
    },
    question: {
        type: String,
    },
    score: {
        type: String,
        required: true,
        min: 0,
        max: 10,
    },
    comment: {
        type: String,
    },
    agent: {
        type: String,
    },
    IP: {
        type: String,
    }

},
    { timestamps: true }
)

const User = mongoose.models.User || mongoose.model("User", userSchema);
const NPS = mongoose.models.NPS || mongoose.model("NPS", npsSchema);

export { User, NPS };