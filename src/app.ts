import express from "express"
import { config } from "dotenv"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import cors from "cors"

config()

const app = express()

app.use(cors({
    origin: "http://localhost:8080",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use(morgan("dev"))

export default app