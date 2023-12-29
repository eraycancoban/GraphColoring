import express from "express";
import  {db} from "../db.js";
import { register,login,logout ,changePassword} from "../controllers/auth.js";
 
const router = express.Router();

router.put("/changepass/:id",changePassword)
router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)
export default router;