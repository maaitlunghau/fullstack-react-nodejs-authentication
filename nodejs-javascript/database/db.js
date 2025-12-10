require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`✅ MongoDB connection successfully`);

    } catch (err) {
        console.log(`❌ MongoDB connection failed: `, err.message);
        throw new Error("Database connection failed");
    }
}

module.exports = connectDB;