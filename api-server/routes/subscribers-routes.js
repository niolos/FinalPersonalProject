let express= require('express');
const { nextTick } = require('process');
const upload = require('../middleware/fileUpload');
const app = express();
let router = express.Router()
let subscribers =require("../models/subscribers")

router.route('/').get((req,res)=>{

    subscribers.find((err,data)=>{
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

router.route('/create').post((req,res)=>{
    subscribers.create(req.body, (err,data)=>{
        if (err){
            return next(err)
        }
        else{
            res.json(data)
        }
    })
})


router.route('/find/:id').get((req,res)=>{
    subscribers.findById(req.params.id,(err, data)=>{
        if(err){
            return next(err)
        }
        else{
            res.json(data);
        }
    })
})


router.route('/update/:id').put((req,res,next)=>{
    subscribers.findByIdAndUpdate({_id:req.params.id}, req.body, (err, data)=>{ 
        if(err){
            return next(err)
        }
        else{
            res.json(data);
        }
    })
})


router.route('/delete/:id').delete((req,res)=>{
    subscribers.findOneAndDelete({_id:req.params.id},(err,data)=>{
        if(err){
            return next(err)
        }
        else{
            res.json(data);
        }
    })
})

module.exports = router; 