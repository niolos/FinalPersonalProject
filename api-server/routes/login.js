let express= require('express');
const { nextTick } = require('process');
const app = express();
let router = express.Router()
const admins = require('../models/login')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secretKey="69e5d9e4777cb26w01-y1hwd71#$2"


router.route('/').post(async(req,res)=>{
    const userName = req.body.userName
    const password = req.body.password
    if(userName && password) {
        await admins.findOne({userName: userName}).then(existUser => {
            if(existUser && existUser._id) {
                bcrypt.compare(password, existUser?.password,function(err, response) {
                    if(!err && response) {
                       const auth = jwt.sign(
                           { user_id: existUser._id, userName },
                           secretKey
                         );
                       res.json({status: 'ok',loginUser : true, data: {existUser , response ,auth}});
                    } else {
                       res.json({status: 'warn', loginUser : false, data: 'Please enter valid password'});
                    }
                })   
            } else {
                res.json({status: 'warn', loginUser : false, data: 'Please enter valid username'});
    
            }
            }, (error) => {
                res.json({status: 'error' , data : error})
            })
        }
    });


router.route('/create').post(async(req,res)=>{
   const registerAdmin={
    userName:req.body.userName,
    password: req.body.password
   }

   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(req.body.password, salt).then(hashedPassword =>{
    if(hashedPassword){
        console.log('hashed password', hashedPassword)
        registerAdmin.password = hashedPassword
    }
   })

   await admins.create(registerAdmin).then(userStoredData =>{
    if(userStoredData && userStoredData._id){
        console.log('user stored data', userStoredData)
        res.json({status:'ok', data : userStoredData})
    }
   }).catch(err=> {
    if(err){
        res.json({status:'error', data: err})
    }
   })
})

module.exports = router;