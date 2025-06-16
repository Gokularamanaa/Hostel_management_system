import mongoose from "mongoose";

export const connect = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/student");
        console.log("connected to DB");
    }catch(error)
    {
        console.log("error while connecting to DB\n" , error);
    }
}
