

//add student
import { studentModel } from "../model/userModel.js";
export const addStudent = async (req, res) => {
    console.log("Request body:", req.body);    
    try {
    const studentData = new studentModel(req.body);
    const existingStudent = await studentModel.findOne({ email: studentData.email });
    if (existingStudent) {
      return res.status(400).json({ error: "Email already exists." });
    }
    const savedStudent = await studentData.save();
    res.status(200).json({ message: "Student  Register successfully.", data: savedStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete a stduent
export const deleteStudent = async (req,res)=>{
    const {deleteId} = req.body;
    
    if(!deleteId){
        return res.status(400).json({error:"Please provide a valid ID to delete"});
    
    }
    try{
        const deletedStudent = await studentModel.findByIdAndDelete({_id:deleteId});
        return res.json({success:true,message:"Student deleted successfully",data:deletedStudent});
    }
    catch(error){
        res.status(500).json({success:false,error:error.message});
    } 
}

//update astduent
export const updateStudent = async (req,res)=>{
    const {UpdateId} = req.body;
    console.log("Update Request body:", req.body);
    if(!UpdateId){
        return res.status(400).json({error:"Please provide a valid ID or data to update"});
    }
    try{
        const updateStudent=  await studentModel.findByIdAndUpdate({_id:UpdateId},req.body,{new:true});
        const savedStudent = await updateStudent.save();
        return res.json({success:true,message:"Student updated successfully",data:updateStudent});
    }
    catch(error){
        res.status(500).json({success:false,error:error.message});
    }
}

//get all students

export const getAllUsers = async(req,res)=>{
    console.log("Fetching all students");
    try{
        const allStudents = await studentModel.find();
        res.status(200).json({success:false,message:"All students fetched successfully",data:allStudents});
    }
    catch(error){
        res.status(500).json({success:false,error:error.message});
    }
};