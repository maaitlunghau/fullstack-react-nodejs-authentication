const { cloudinary } = require("../config/cloudinary");


// helper function
const uploadImageToCloudinary = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath);

        return {
            url: result.url,
            publicId: result.public_id
        }

    } catch (err) {
        console.log(`❌ Failed to upload image to cloudinary: ${err.message}`);
    }
}

const updateImageToCloudinary = async (publicId) => {
    try {

    } catch (err) {
        console.log(`❌ Failed to update image from cloudinary: ${err.message}`);
    }
}

const deleteImageFromCloudinary = async (publicId) => {
    try {
        return await cloudinary.uploader.destroy(publicId);

    } catch (err) {
        console.log(`❌ Failed to delete image from cloudinary: ${err.message}`);
    }
}


module.exports = {
    uploadImageToCloudinary,
    updateImageToCloudinary,
    deleteImageFromCloudinary
}
