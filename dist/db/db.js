"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectDb = exports.connectDb = void 0;
const mongoose_1 = require("mongoose");
async function connectDb() {
    try {
        await (0, mongoose_1.connect)(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Database connection failed");
    }
}
exports.connectDb = connectDb;
async function disconnectDb() {
    try {
        await (0, mongoose_1.disconnect)();
    }
    catch (error) {
        console.log(error);
        throw new Error("Database disconnection failed");
    }
}
exports.disconnectDb = disconnectDb;
//# sourceMappingURL=db.js.map