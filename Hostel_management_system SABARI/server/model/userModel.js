import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
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
});


const userSchema = new mongoose.Schema({
     studentName:{
        type:String,
        required: [true,"name is required"]
    },
     email:{
        type:String,
        required: [true,"email is required"],
        unique: true,
        },
      department:{
        type:String,
        required: [true,"department is required"]
      },
        year:{
            type:String,
            required: [true,"year is required"]
        },
        mobileNumber:{
             type:String,
             required: [true,"mobile number is required"],
        },
});

export const studentModel = mongoose.model("students", userSchema);

export const LoginModel = mongoose.model("student", LoginSchema);


