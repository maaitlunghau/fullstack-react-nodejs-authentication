require("dotenv").config();
const cloudinary = require("cloudinary");


// configure connection
const connectCloud = async () => {
    try {
        await cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });
        console.log(`✅ Cloudinary connection successfully`);

    } catch (err) {
        console.log(`❌ Cloudinary connection failed: `, err.message);
        throw new Error("Cloudinary connection failed");
    }
}


module.exports = {
    connectCloud,
    cloudinary
};