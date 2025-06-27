import express from "express";
import * as mongoBD from "./mongoDB.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routers/userRoute.js";

dotenv.config();
const app = express();
app.use(express.json());



const PORT   = process.env.PORT || 4000;

mongoBD.connect();
app.listen(PORT,()=>{
  console.log("SERVER IS RUNNING ON PORT");
  
});

app.get("/", (req, res) => {
  res.send("THIS IS SERVER " + PORT);
});
app.use("/api/student" , route);
