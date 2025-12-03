const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, '../public/uploads/images'));
    },
    filename: function (req, file, callback) {
        const uniqueName = Date.now() + '-' + file.originalname.replace(/\s+/g, '');
        callback(null, uniqueName);
    }
});

const fileFilter = (req, file, callback) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];

    if (allowed.includes(file.mimetype))
        callback(null, true);
    else
        cb(new Error('Only JPG, PNG, WEBP under 5MBare allowed'), false);
}


const upload = multer({
    storage,
    fileFilter,
    limit: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
});


module.exports = upload;