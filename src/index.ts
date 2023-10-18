import app from "./app"
import { connectDb } from "./db/db"

const PORT = process.env.PORT || 5000

connectDb()
    .then(() => {
        app.listen(PORT, () => console.log("Database is connected"))
    })
    .catch((err) => console.log(err))