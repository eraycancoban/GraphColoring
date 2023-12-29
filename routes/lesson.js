import express from "express";
import  {db} from "../db.js";
import { addLesson,myLessons,selectLesson,studentLessons} from "../controllers/lesson.js";
 
const router = express.Router();

router.post("/addLesson/:id",addLesson)
router.get("/myLessons/:id",myLessons)
router.post("/selectLesson/:id",selectLesson)
router.get("/studentLesson/:id",studentLessons)
export default router;