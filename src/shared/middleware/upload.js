const multer = require("multer");
const path = require("path");
const fs = require("fs");

const pathImageFolder = path.join("src/public", "images");
const maxSize = 1 * 1024 * 1024;
const maxFile = 3;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync(pathImageFolder)) {
            fs.mkdirSync(pathImageFolder, { recursive: true });
        }

        cb(null, pathImageFolder);
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype.includes("jpeg") ||
        file.mimetype.includes("png") ||
        file.mimetype.includes("jpg")
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: maxSize },
});

const imagePet = upload.single("petImage");

module.exports = { imagePet };
