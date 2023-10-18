import { Router } from "express"

import { register } from "../controllers/user.controller"
import { registerValidator, validate } from "../utils/validator"

const userRoutes = Router()

userRoutes.post("/register", validate(registerValidator), register)

export default userRoutes