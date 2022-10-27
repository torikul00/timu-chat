const multer = require('multer')
const path = require('path')
const createError = require('http-errors')


function uploader(
    subfolder_path,
    allow_file_type,
    max_file_size,
    error_msg
) {
    //  make uploader object
    const UPLOADS_FOLDER = `../public/uploads/${subfolder_path}`
    // define the storage 
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, UPLOADS_FOLDER)
        },
        filename: (req, file, cb) => {
            const fileExt = path.extname(file.originalname)
            const fileName =
                file.originalname
                    .replace(fileExt, '')
                    .toLowerCase()
                    .split(' ')
                    .join('-') +
                "-" +
                Date.now()

            cb(null, fileName + fileExt)
        }
    })
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: max_file_size
        },
        fileFilter: (req, file, cb) => {
            if (allow_file_type.includes(file.mimetype)) {
                cb(null, true)
            } else {
                cb(createError(error_msg))
            }
        }
    }
    )
    return upload
}

module.exports = uploader;
