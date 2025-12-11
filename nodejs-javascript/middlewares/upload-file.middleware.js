const multer = require("multer");
const path = require("path");

// middleware
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/uploads"));
    },
    filename: (req, file, cb) => {
        let fileName = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
})

const checkFileFilter = (req, file, cb) => {
    if (!file.mimetype.startsWith("image")) {
        return cb(new Error("Not an image! Please upload only image..."), false);
    }

    cb(null, true);
}


module.exports = multer({
    storage: storage,
    fileFilter: checkFileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
})