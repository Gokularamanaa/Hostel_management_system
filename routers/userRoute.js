import express from "express";
import { studenloginDelete,studentloginUpdate,studentloginDetails, studentloginCreate,studentloginDetailsById} from "../controller/userController.js";

const route = express.Router();

route.post("/Login",studentloginCreate);
route.delete("/Login",studenloginDelete);
route.patch('/Login',studentloginUpdate);
route.get("/Login", studentloginDetails);
route.get("/login/:id", studentloginDetailsById);


// route.post("/register",studentCreate);
// route.patch("/update",studentUpdate);






export default route;