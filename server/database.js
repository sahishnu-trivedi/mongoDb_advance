// const mongoose = require("mongoose");
import mongoose from "mongoose"

const databaseConnection = async() => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.pjbpvcl.mongodb.net/bookstore`).then(() => console.log("Database Connected Successfully")).catch((err) => console.log("Database Not Connected", err))
    // await mongoose.connect(`mongodb://localhost:3000/bookstore`).then(() => console.log("Database Connected Successfully")).catch((err) => console.log("Database Not Connected", err))
}

// module.exports = databaseConnection;
export default databaseConnection