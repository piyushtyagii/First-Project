const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body , validationResult} = require("express-validator")
const bcrypt = require("bcryptjs")

router.post("/createuser", 
    body('email','invalid email').isEmail(),
    body('password','incorrect password').isLength({min:5})
    , async (req,res)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array(),success : "validation-not-satisfied"});
            
        }
        const user = await User.findOne({email : req.body.email});
        if(user){
            res.status(400).json({success:"User-already-registered"})
        }
        else if(!user){
            const salt =  await bcrypt.genSalt(10);
            const securepassword =await bcrypt.hash(req.body.password,salt) ;
            console.log(securepassword)
            await User.create({
                email : req.body.email,
                password : securepassword
            })
            res.json({success : "registered"})
        }
    } catch (error) {
        console.log(error)
        res.json({success : false})
    }
})

module.exports = router;