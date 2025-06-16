import express from "express"
import { addStudent, deleteStudent, updateStudent,getAllUsers } from "../controller/userController.js";

const route = express.Router();

route.post("/create",addStudent);
route.delete("/delete",deleteStudent);
route.patch('/update',updateStudent);
route.get("/all", getAllUsers);

export default route;