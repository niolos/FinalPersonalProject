let express= require('express');
const { nextTick } = require('process');
const upload = require('../middleware/fileUpload');
const app = express();
let router = express.Router()
const events = require('../models/events')

router.route('/').get((req,res)=>{
    events.find((err,data)=>{
        if(err){
            return next(err)
        }
        else{
            res.json(data)
        }
    })
})

//mongo functions
//create()  findById()  findByIdAndUpdate()  findOneAndRemove()

router.route('/create').post( upload.single('eventImg'), (req,res)=>{
    if(req.file){
        req.body.eventImg = req.file.path
    }
    events.create(req.body, (err,data)=>{
        if (err){
            // return next(err)
            // res.json(err)
            res.send(err)
        }
        else{
            // res.json(data)
            res.json(data)
        }
    })
})


router.route('/find/:id').get((req,res)=>{
    events.findById(req.params.id,(err, data)=>{
        if(err){
            return next(err)
        }
        else{
            res.json(data);
        }
    })
})


router.route('/update/:id').patch((req,res,next)=>{
    events.findByIdAndUpdate({_id:req.params.id}, req.body, (err, data)=>{ 
        if(err){
            return next(err)
        }
        else{
            res.json(data);
        }
    })
})


router.route('/delete/:id').delete((req,res)=>{
    events.findOneAndDelete({_id:req.params.id},(err,data)=>{
        if(err){
            return next(err)
        }
        else{
            res.json(data);
        }
    })
})

module.exports = router; 