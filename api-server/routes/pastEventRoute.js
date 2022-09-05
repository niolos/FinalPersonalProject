let express= require('express');
const { nextTick } = require('process');
const upload = require('../middleware/fileUpload');
const app = express();
let router = express.Router()
const events = require('../models/events')

router.route('/').get((req,res)=>{
    events.find({status: 'Past'},(err, data)=>{
        console.log(data)
        if(err){
            return next(err)
        }
        else{
            res.json(data);
        }
    })
})

module.exports = router;