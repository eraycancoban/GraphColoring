import express from "express";
import  {db} from "../db.js";
import { komsulukCikar,getProgram} from "../controllers/graphColoring.js"

const router = express.Router();

router.get("/k",komsulukCikar)
router.get("/p",getProgram)
export default router;