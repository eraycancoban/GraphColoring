import express from "express"
import cors from "cors"
import lessonRouter from "./routes/lesson.js"
import authRouter from "./routes/auth.js"
import programRouter from "./routes/program.js"
import cookieParser from "cookie-parser"

import  {db} from "./db.js";


const app = express()
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json())

app.use(cookieParser())
app.use("/auth", authRouter)
app.use("/lesson", lessonRouter)
app.use("/program", programRouter)


app.listen(8800, () => {
    console.log("Backend server is running!")
})



