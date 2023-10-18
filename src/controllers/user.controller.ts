import { Request, Response, NextFunction } from "express"
import { hash, compare } from "bcrypt"

import User from "../models/user.model"
import { COOKIE_NAME } from "../utils/constants"
import { createToken } from "../utils/token"

export const register = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { name, email, password } = req.body

        const existingUser = await User.findOne({ email })
        if (existingUser) return res.status(401).send("User already registered.")

        const hashedPassword = await hash(password, 10)

        const user = new User({ name, email, password: hashedPassword })
        await user.save()

        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            domain: "localhost",
            signed: true,
            path: "/"
        })

        const token = createToken(user._id.toString(), user.email, "7d")
        const expires = new Date()
        expires.setDate(expires.getDate() + 7)

        res.cookie(COOKIE_NAME, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true
        })

        return res.status(201).json({
            message: "200 OK",
            name: user.name,
            email: user.email
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            messages: "400 ERROR",
            cause: error.message
        })
    }
}