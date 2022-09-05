const multer =require('multer')
const path = require('path')

let  storage = multer.diskStorage({
    destination:(req, file, callBack) =>{
        callBack(null, 'uploads/')
    },
    filename:(req, file, callBack) =>{
        let ext =  path.extname(file.originalname)
        callBack(null, file.originalname.split(ext)[0] + Date.now() + ext)
    }
})

var upload = multer({
    storage:storage,
    limits:{
        fieldSize:1024 * 1024 * 15
    }
})


module.exports = upload