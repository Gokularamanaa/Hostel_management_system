import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required: [true,"name is required"]
    },
     email:{
        type:String,
        required: [true,"email is required"],
        unique: true,
        },
        password:{
        type:String,
        },
})

export const studentModel = mongoose.model("student", userSchema);