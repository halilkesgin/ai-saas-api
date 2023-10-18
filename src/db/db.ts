import { connect, disconnect } from "mongoose"

async function connectDb() {
    try {
        await connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error)
        throw new Error("Database connection failed")
    }
}

async function disconnectDb() {
    try {
        await disconnect()
    } catch (error) {
        console.log(error)
        throw new Error("Database disconnection failed")
    }
}

export { connectDb, disconnectDb }